import { Calendar, ExternalLink, AlertTriangle, TrendingUp, Shield } from 'lucide-react';
import { Button } from '../Button';
import '../Style/News.css';
const NewsPage = () => {
  const newsData = [
    {
      id: 1,
      title: "اكتشاف ثغرة أمنية جديدة في متصفحات الويب",
      summary: "باحثون أمنيون يكتشفون ثغرة خطيرة قد تسمح للمهاجمين بسرقة البيانات الشخصية",
      date: "2024-01-15",
      category: "ثغرات أمنية",
      severity: "عالية",
      source: "مركز الأمن السيبراني",
      content: "اكتشف فريق من الباحثين الأمنيين ثغرة جديدة في المتصفحات الشائعة قد تسمح للمهاجمين بالوصول إلى البيانات الحساسة. ينصح المستخدمون بتحديث متصفحاتهم فوراً.",
      recommendations: [
        "تحديث المتصفح إلى أحدث إصدار",
        "تجنب زيارة المواقع غير الموثوقة",
        "استخدام إضافات الحماية"
      ]
    },
    {
      id: 2,
      title: "زيادة هجمات التصيد الإلكتروني بنسبة 40%",
      summary: "تقرير جديد يظهر ارتفاعاً كبيراً في محاولات التصيد الإلكتروني خلال الربع الأخير",
      date: "2024-01-12",
      category: "إحصائيات",
      severity: "متوسطة",
      source: "شركة الأمن السيبراني العالمية",
      content: "أظهر تقرير حديث زيادة كبيرة في هجمات التصيد الإلكتروني، خاصة تلك التي تستهدف المؤسسات المالية والتعليمية.",
      recommendations: [
        "التحقق من صحة رسائل البريد الإلكتروني",
        "عدم النقر على الروابط المشبوهة",
        "التدريب المستمر للموظفين"
      ]
    }
  ];

  const getSeverityClass = (severity) => {
    switch (severity) {
      case 'منخفضة': return 'sev-green';
      case 'متوسطة': return 'sev-yellow';
      case 'عالية': return 'sev-orange';
      case 'عالية جداً': return 'sev-red';
      default: return 'sev-gray';
    }
  };

  return (
    <div className="news-page">
      {/* العنوان الرئيسي */}
      <section className="news-header">
        <TrendingUp className="header-icon" />
        <h1>أخبار الأمن السيبراني</h1>
        <p>آخر الأخبار والتطورات في عالم الأمن السيبراني والتهديدات الرقمية</p>
      </section>

      {/* قائمة الأخبار */}
      <section className="news-list">
        {newsData.map((news) => (
          <article key={news.id} className="news-card">
            <div className="news-meta">
              <div className="news-tags">
                <span className="tag">{news.category}</span>
                <span className={`tag ${getSeverityClass(news.severity)}`}>{news.severity}</span>
              </div>
              <h2>{news.title}</h2>
              <p className="summary">{news.summary}</p>
              <div className="meta-info">
                <span><Calendar size={16} /> {new Date(news.date).toLocaleDateString('ar-SA')}</span>
                <span><ExternalLink size={16} /> {news.source}</span>
              </div>
            </div>

            <div className="news-content">
              <p>{news.content}</p>
            </div>

            <div className="recommendations">
              <h4><Shield size={18} /> التوصيات الأمنية</h4>
              <ul>
                {news.recommendations.map((r, i) => (
                  <li key={i}>• {r}</li>
                ))}
              </ul>
            </div>

            <div className="actions">
              <Button variant="outline" size="sm">قراءة المزيد</Button>
              <Button variant="outline" size="sm">مشاركة</Button>
            </div>
          </article>
        ))}
      </section>

      {/* تنبيه أمني */}
      <section className="alert-box">
        <AlertTriangle className="alert-icon" />
        <div>
          <h3>تنبيه أمني مهم</h3>
          <p>
            تذكر أن التهديدات السيبرانية تتطور باستمرار. ابق على اطلاع دائم بآخر التطورات 
            وطبق التوصيات الأمنية فور صدورها.
          </p>
          <div className="alert-buttons">
            <Button className="btn-alert">اشترك في التنبيهات</Button>
            <Button variant="outline" size="sm" className="btn-outline-red">تعلم المزيد</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
