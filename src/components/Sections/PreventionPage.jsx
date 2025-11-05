import { useState } from 'react';
import { Shield, CheckCircle, Star, Filter, Search } from 'lucide-react';
import { Button } from '../Button';
import preventionData from '../../data/preventionData';
import '../Style/Prevention.css';

const PreventionPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const categories = ['all', 'أساسيات الأمان', 'صيانة النظام', 'حماية البيانات', 'الاستخدام اليومي', 'الشبكات', 'الهندسة الاجتماعية'];
  const difficulties = ['all', 'سهل', 'متوسط', 'صعب'];

  const filteredPrevention = preventionData.filter(item => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || item.difficulty === selectedDifficulty;
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  return (
    <div className="prevention-page">
      {/* العنوان الرئيسي */}
      <section className="prevention-header">
        <Shield className="header-icon" />
        <h1>طرق الوقاية والحماية</h1>
        <p>تعلم أفضل الممارسات والطرق المثبتة لحماية نفسك ومؤسستك من التهديدات السيبرانية</p>
      </section>

      {/* أدوات البحث والتصفية */}
      <section className="filter-box">
        <div className="filter-grid">
          <div className="input-group">
            <Search className="input-icon" />
            <input
              type="text"
              placeholder="ابحث عن طريقة حماية..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="input-group">
            <Filter className="input-icon" />
            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
              {categories.map(c => (
                <option key={c} value={c}>{c === 'all' ? 'جميع الفئات' : c}</option>
              ))}
            </select>
          </div>

          <div className="input-group">
            <Star className="input-icon" />
            <select value={selectedDifficulty} onChange={(e) => setSelectedDifficulty(e.target.value)}>
              {difficulties.map(d => (
                <option key={d} value={d}>{d === 'all' ? 'جميع المستويات' : d}</option>
              ))}
            </select>
          </div>

          <Button
            className="reset-btn"
            variant="outline"
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
              setSelectedDifficulty('all');
            }}
          >
            إعادة تعيين
          </Button>
        </div>
      </section>

      {/* عدد النتائج */}
      <p className="results-count">
        عرض {filteredPrevention.length} من أصل {preventionData.length} طريقة حماية
      </p>

      {/* قائمة طرق الوقاية */}
      <div className="prevention-grid">
        {filteredPrevention.map((item) => (
          <div key={item.id} className="prevention-card">
            <div className="card-header">
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <Shield className="card-icon" />
            </div>

            <div className="card-tags">
              <span className="tag blue">{item.category}</span>
              <span className={`tag importance-${item.importance}`}>أهمية: {item.importance}</span>
              <span className={`tag difficulty-${item.difficulty}`}>صعوبة: {item.difficulty}</span>
            </div>

            <div className="tips-box">
              <h4><CheckCircle size={18} /> نصائح التطبيق</h4>
              <ul>
                {item.tips.map((tip, i) => (
                  <li key={i}>• {tip}</li>
                ))}
              </ul>
            </div>

            <div className="card-footer">
              <Button className="apply-btn">تطبيق هذه الطريقة</Button>
            </div>
          </div>
        ))}
      </div>

      {/* لا توجد نتائج */}
      {filteredPrevention.length === 0 && (
        <div className="no-results">
          <Shield className="no-icon" />
          <h3>لا توجد نتائج</h3>
          <p>جرب تغيير معايير البحث أو التصفية</p>
        </div>
      )}

      {/* نصائح عامة */}
      <section className="general-tips">
        <h2>نصائح عامة للأمان السيبراني</h2>
        <div className="tips-grid">
          <div className="tip-card">
            <div className="tip-icon"><Shield /></div>
            <h3>كن حذراً دائماً</h3>
            <p>التحقق المسبق أفضل من الوقوع في الخطر.</p>
          </div>
          <div className="tip-card">
            <div className="tip-icon"><CheckCircle /></div>
            <h3>حدّث أنظمتك باستمرار</h3>
            <p>التحديثات الأمنية هي خط الدفاع الأول.</p>
          </div>
          <div className="tip-card">
            <div className="tip-icon"><Star /></div>
            <h3>تعلم باستمرار</h3>
            <p>المعرفة أفضل سلاح ضد الهجمات.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PreventionPage;
