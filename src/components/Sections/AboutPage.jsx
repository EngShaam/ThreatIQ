import { Shield, Target, Users, BookOpen, Award, Heart } from 'lucide-react';
import '../Style/About.css';

const AboutPage = () => {
  const teamMembers = [
    { name: "د. أحمد محمد", role: "خبير الأمن السيبراني", description: "أكثر من 15 عاماً من الخبرة في مجال الأمن السيبراني والحماية الرقمية", icon: Shield },
    { name: "م. فاطمة علي", role: "مطورة أمان التطبيقات", description: "متخصصة في تطوير التطبيقات الآمنة وفحص الثغرات الأمنية", icon: BookOpen },
    { name: "د. محمد حسن", role: "باحث في الذكاء الاصطناعي", description: "يركز على استخدام الذكاء الاصطناعي في كشف التهديدات السيبرانية", icon: Award }
  ];

  const values = [
    { icon: Shield, title: "الأمان أولاً", description: "نضع الأمان والحماية في مقدمة أولوياتنا في كل ما نقدمه" },
    { icon: BookOpen, title: "التعليم المستمر", description: "نؤمن بأهمية التعلم المستمر ومواكبة التطورات في مجال الأمن السيبراني" },
    { icon: Users, title: "المجتمع أولاً", description: "نهدف إلى بناء مجتمع واعٍ ومحمي من التهديدات الرقمية" },
    { icon: Heart, title: "الشفافية", description: "نقدم معلومات دقيقة وموثوقة بشفافية كاملة" }
  ];

  return (
    <div className="about-page">
      {/* العنوان الرئيسي */}
      <section className="about-header">
        <Shield className="about-icon" />
        <h1>حول موقع الأمن السيبراني</h1>
        <p>نحن منصة تعليمية متخصصة في نشر الوعي حول الأمن السيبراني وحماية البيانات الرقمية.</p>
      </section>

      {/* الرسالة */}
      <section className="about-section">
        <Target className="section-icon" />
        <h2>رسالتنا</h2>
        <p>
          في عصر التكنولوجيا الرقمية، أصبحت الحماية من التهديدات السيبرانية ضرورة حتمية لكل فرد ومؤسسة. 
          نحن نؤمن بأن التعليم والوعي هما أقوى أسلحة الدفاع ضد الهجمات الإلكترونية.
        </p>
        <div className="mission-grid">
          <div className="mission-card blue">
            <h3>هدفنا</h3>
            <p>
              نسعى إلى جعل الأمن السيبراني مفهوماً وقابلاً للتطبيق من قبل الجميع، 
              من المستخدمين العاديين إلى المتخصصين في التقنية.
            </p>
          </div>
          <div className="mission-card blue1">
            <h3>رؤيتنا</h3>
            <p>
              نتطلع إلى مجتمع رقمي آمن حيث يمتلك كل فرد المعرفة والأدوات اللازمة 
              لحماية نفسه من التهديدات السيبرانية.
            </p>
          </div>
        </div>
      </section>

      {/* قيمنا */}
      <section className="values-section">
        <h2>قيمنا الأساسية</h2>
        <div className="values-grid">
          {values.map((v, i) => (
            <div className="value-card" key={i}>
              <v.icon className="value-icon" />
              <h3>{v.title}</h3>
              <p>{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* فريق العمل */}
      <section className="team-section">
        <h2>فريق العمل</h2>
        <p>فريقنا مكون من خبراء متخصصين في الأمن السيبراني يعملون بشغف لتقديم أفضل المحتوى التعليمي.</p>
        <div className="team-grid">
          {teamMembers.map((m, i) => (
            <div className="team-card" key={i}>
              <div className="team-avatar">
                <m.icon className="avatar-icon" />
              </div>
              <h3>{m.name}</h3>
              <span>{m.role}</span>
              <p>{m.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* الدعوة للتواصل */}
      <section className="cta-section">
        <h2>انضم إلى مجتمعنا</h2>
        <p>كن جزءاً من مجتمع الأمن السيبراني وساهم في نشر الوعي الأمني.</p>
        <div className="cta-buttons">
          <button className="btn-primary">تواصل معنا</button>
          <button className="btn-outline">اشترك في النشرة</button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
