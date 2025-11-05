import { Shield, AlertTriangle, TrendingUp, Users, Lock, Eye } from 'lucide-react';
import { Button } from '../Button';
import '../Style/Home.css';
const HomePage = ({ setActiveSection }) => {
  const stats = [
    { icon: AlertTriangle, label: 'هجمات يومية', value: '4,000+', color: 'red' },
    { icon: TrendingUp, label: 'نمو التهديدات', value: '67%', color: 'orange' },
    { icon: Users, label: 'ضحايا سنوياً', value: '1.7M', color: 'blue' },
    { icon: Lock, label: 'تكلفة الاختراق', value: '$4.45M', color: 'green' }
  ];

  const features = [
    {
      icon: Shield,
      title: 'تعلم الحماية',
      description: 'اكتشف أحدث طرق الحماية من الهجمات السيبرانية وتعلم كيفية تأمين بياناتك الشخصية والمهنية.',
      action: () => setActiveSection('prevention')
    },
    {
      icon: Eye,
      title: 'فهم التهديدات',
      description: 'تعرف على أنواع الهجمات السيبرانية المختلفة وكيفية عملها لتكون أكثر وعياً وحذراً.',
      action: () => setActiveSection('attacks')
    },
    {
      icon: Lock,
      title: 'أدوات تفاعلية',
      description: 'استخدم أدواتنا التفاعلية لفحص قوة كلمات المرور وتقييم مستوى الأمان لديك.',
      action: () => setActiveSection('tools')
    }
  ];

  return (
    <div className="home-page">
      {/* ===== القسم الرئيسي ===== */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <Shield className="hero-icon" />
          <h1>دليلك الشامل للأمن السيبراني</h1>
          <p>تعلم كيفية حماية نفسك ومؤسستك من الهجمات الإلكترونية المتزايدة</p>
          <div className="hero-buttons">
            <Button className="btn-primary" onClick={() => setActiveSection('attacks')}>
              استكشف الهجمات
            </Button>
            <Button className="btn-outline" onClick={() => setActiveSection('prevention')}>
              تعلم الحماية
            </Button>
          </div>
        </div>
      </section>

      {/* ===== الإحصائيات ===== */}
      <section className="stats-section">
        <h2>إحصائيات الأمن السيبراني</h2>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <stat.icon className={`icon ${stat.color}`} />
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== الميزات ===== */}
      <section className="features-section">
        <h2>ماذا ستتعلم معنا؟</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <feature.icon className="feature-icon" />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <Button className="btn-feature" onClick={feature.action}>
                اكتشف المزيد
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* ===== تحذير أمني ===== */}
      <section className="warning-section">
        <AlertTriangle className="warning-icon" />
        <h2>هل تعلم؟</h2>
        <div className="warning-grid">
          <div className="warning-card">
            <h3>كل 39 ثانية</h3>
            <p>يحدث هجوم سيبراني جديد في مكان ما حول العالم</p>
          </div>
          <div className="warning-card">
            <h3>95% من الاختراقات</h3>
            <p>تحدث بسبب الأخطاء البشرية وليس الثغرات التقنية</p>
          </div>
          <div className="warning-card">
            <h3>300 مليار دولار</h3>
            <p>التكلفة السنوية للجرائم السيبرانية عالمياً</p>
          </div>
          <div className="warning-card">
            <h3>280 يوم</h3>
            <p>متوسط الوقت لاكتشاف الاختراق الأمني</p>
          </div>
        </div>
      </section>

      {/* ===== دعوة للعمل ===== */}
      <section className="cta-section">
        <h2>ابدأ رحلتك في الأمن السيبراني اليوم</h2>
        <p>لا تنتظر حتى تصبح ضحية. تعلم كيفية حماية نفسك الآن</p>
        <Button className="btn-cta" onClick={() => setActiveSection('prevention')}>
          ابدأ التعلم الآن
        </Button>
      </section>
    </div>
  );
};

export default HomePage;
