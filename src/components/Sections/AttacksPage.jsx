import { useState } from 'react';
import {
  Search,
  Filter,
  Calendar,
  AlertTriangle,
  Shield,
  Eye,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import cyberAttacksData from '../../data/attacksData';
import '../Style/Attacks.css';

const AttacksPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedSeverity, setSelectedSeverity] = useState('all');
  const [expandedCard, setExpandedCard] = useState(null);

  const attackTypes = ['all', 'فيروس', 'برمجية خبيثة', 'دودة كمبيوتر', 'اختراق بيانات', 'هجوم سلسلة التوريد'];
  const severityLevels = ['all', 'متوسطة', 'عالية', 'عالية جداً'];

  const filteredAttacks = cyberAttacksData.filter((attack) => {
    const matchesSearch =
      attack.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      attack.arabicName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      attack.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || attack.type === selectedType;
    const matchesSeverity = selectedSeverity === 'all' || attack.severity === selectedSeverity;
    return matchesSearch && matchesType && matchesSeverity;
  });

  const getSeverityClass = (severity) => {
    switch (severity) {
      case 'متوسطة':
        return 'sev-yellow';
      case 'عالية':
        return 'sev-orange';
      case 'عالية جداً':
        return 'sev-red';
      default:
        return 'sev-gray';
    }
  };

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="attacks-page">
      {/* العنوان */}
      <section className="attacks-header">
        <AlertTriangle className="header-icon" />
        <h1>الهجمات السيبرانية</h1>
        <p>تعرف على أشهر الهجمات السيبرانية في التاريخ وتعلم كيفية الحماية منها</p>
      </section>

      {/* البحث والتصفية */}
      <section className="filter-box">
        <div className="filter-grid">
          <div className="input-group">
            <Search className="input-icon" />
            <input
              type="text"
              placeholder="ابحث عن هجمة..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="input-group">
            <Filter className="input-icon" />
            <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
              {attackTypes.map((type) => (
                <option key={type} value={type}>
                  {type === 'all' ? 'جميع الأنواع' : type}
                </option>
              ))}
            </select>
          </div>

          <div className="input-group">
            <AlertTriangle className="input-icon" />
            <select value={selectedSeverity} onChange={(e) => setSelectedSeverity(e.target.value)}>
              {severityLevels.map((level) => (
                <option key={level} value={level}>
                  {level === 'all' ? 'جميع المستويات' : level}
                </option>
              ))}
            </select>
          </div>

          <button
            className="reset-btn"
            onClick={() => {
              setSearchTerm('');
              setSelectedType('all');
              setSelectedSeverity('all');
            }}
          >
            إعادة تعيين
          </button>
        </div>
      </section>

      {/* عدد النتائج */}
      <p className="results-count">
        عرض {filteredAttacks.length} من أصل {cyberAttacksData.length} هجمة
      </p>

      {/* قائمة الهجمات */}
      <div className="attacks-list">
        {filteredAttacks.map((attack) => (
          <div key={attack.id} className="attack-card">
            <div className="card-header">
              <div>
                <h3>{attack.arabicName}</h3>
                <span className="eng-name">({attack.name})</span>
                <div className="card-meta">
                  <span>
                    <Calendar size={14} /> {attack.date}
                  </span>
                  <span className="type">{attack.type}</span>
                  <span className={`sev-tag ${getSeverityClass(attack.severity)}`}>
                    {attack.severity}
                  </span>
                </div>
              </div>

              {/* زر عرض التفاصيل */}
              <button
                className={`toggle-btn ${expandedCard === attack.id ? 'active' : ''}`}
                onClick={() => toggleCard(attack.id)}
              >
                {expandedCard === attack.id ? (
                  <>
                    <ChevronUp size={16} /> إخفاء التفاصيل
                  </>
                ) : (
                  <>
                    <ChevronDown size={16} /> عرض التفاصيل
                  </>
                )}
              </button>
            </div>

            <p className="desc">{attack.description}</p>

            <div className="meta-grid">
              <div>
                <strong>الهدف:</strong> {attack.target}
              </div>
              <div>
                <strong>الأضرار:</strong> {attack.damage}
              </div>
            </div>

            {expandedCard === attack.id && (
              <div className="card-details">
                <div className="detail-box turquoise">
                  <div className="detail-title">
                    <Shield /> طرق الوقاية
                  </div>
                  <p>{attack.prevention}</p>
                </div>
                <div className="detail-box blue">
                  <div className="detail-title">
                    <Eye /> طرق الكشف
                  </div>
                  <p>{attack.detection}</p>
                </div>
                <div className="detail-box purple">
                  <div className="detail-title">
                    <AlertTriangle /> الحلول
                  </div>
                  <p>{attack.solution}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredAttacks.length === 0 && (
        <div className="no-results">
          <AlertTriangle className="no-icon" />
          <h3>لا توجد نتائج</h3>
          <p>جرب تغيير معايير البحث أو التصفية</p>
        </div>
      )}
    </div>
  );
};

export default AttacksPage;
