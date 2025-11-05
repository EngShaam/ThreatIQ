import { useState } from 'react';
import { Lock, Eye, EyeOff, Shield, AlertTriangle, CheckCircle, Zap } from 'lucide-react';
import { Button } from '../Button';
import '../Style/Tools.css';

const ToolsPage = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(null);
  const [phishingUrl, setPhishingUrl] = useState('');
  const [phishingResult, setPhishingResult] = useState(null);

  // فحص قوة كلمة المرور
  const checkPasswordStrength = (pwd) => {
    let score = 0;
    let feedback = [];

    if (pwd.length >= 8) score++;
    else feedback.push('يجب أن تكون كلمة المرور 8 أحرف على الأقل');

    if (pwd.length >= 12) score++;
    else if (pwd.length >= 8) feedback.push('استخدم 12 حرفًا أو أكثر لحماية أفضل');

    if (/[a-z]/.test(pwd)) score++;
    else feedback.push('أضف أحرف صغيرة (a-z)');

    if (/[A-Z]/.test(pwd)) score++;
    else feedback.push('أضف أحرف كبيرة (A-Z)');

    if (/[0-9]/.test(pwd)) score++;
    else feedback.push('أضف أرقام (0-9)');

    if (/[^A-Za-z0-9]/.test(pwd)) score++;
    else feedback.push('أضف رموز خاصة (!@#$%^&)');

    const common = ['123456', 'password', 'qwerty', 'abc123', '111111'];
    if (common.some((p) => pwd.toLowerCase().includes(p))) {
      score -= 2;
      feedback.push('تجنب الأنماط الشائعة مثل 123456 أو password');
    }

    let strength = 'ضعيفة جداً';
    let color = 'weak';
    let icon = AlertTriangle;

    if (score >= 5) {
      strength = 'قوية جداً';
      color = 'strong';
      icon = CheckCircle;
    } else if (score >= 4) {
      strength = 'قوية';
      color = 'good';
      icon = Shield;
    } else if (score >= 2) {
      strength = 'متوسطة';
      color = 'medium';
      icon = AlertTriangle;
    }

    return { strength, color, feedback, score, icon };
  };

  const handlePasswordCheck = () => {
    if (password) setPasswordStrength(checkPasswordStrength(password));
  };

  // فحص الروابط المشبوهة
  const checkPhishingUrl = () => {
    if (!phishingUrl) return;

    const patterns = [
      /bit\.ly|tinyurl|t\.co/i,
      /[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+/,
      /[a-z]+-[a-z]+-[a-z]+\.(tk|ml|ga|cf)/i,
      /paypal|amazon|google|microsoft|apple/i,
      /urgent|verify|suspend|click|now/i,
    ];

    let risk = 'منخفض';
    let warnings = [];
    let color = 'safe';

    if (!phishingUrl.startsWith('https://')) {
      warnings.push('الرابط لا يستخدم HTTPS الآمن');
      risk = 'متوسط';
      color = 'warn';
    }

    patterns.forEach((p) => {
      if (p.test(phishingUrl)) {
        risk = 'عالي';
        color = 'danger';
        warnings.push('الرابط يحتوي على علامات مشبوهة');
      }
    });

    if (warnings.length === 0)
      warnings.push('لا توجد علامات تحذيرية واضحة، لكن كن حذراً دائماً.');

    setPhishingResult({ risk, warnings, color });
  };

  return (
    <div className="tools-page">
      <section className="tools-header">
        <Zap className="header-icon" />
        <h1>الأدوات التفاعلية</h1>
        <p>استخدم أدواتنا لفحص مستوى الأمان لديك وتعلم كيفية تحسينه</p>
      </section>

      <div className="tools-grid">
        {/* فاحص كلمة المرور */}
        <div className="tool-card">
          <div className="tool-title">
            <Lock /> <h2>فاحص قوة كلمة المرور</h2>
          </div>

          <div className="tool-body">
            <div className="input-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="أدخل كلمة المرور للفحص..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={() => setShowPassword(!showPassword)} className="eye-btn">
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>

            <button className="gradient-btn" onClick={handlePasswordCheck} disabled={!password}>
              فحص كلمة المرور
            </button>

            {passwordStrength && (
              <div className="result-box">
                <div className={`strength ${passwordStrength.color}`}>
                  <passwordStrength.icon />
                  <span>{passwordStrength.strength}</span>
                </div>
                <div className="progress-bar">
                  <div
                    className={`progress ${passwordStrength.color}`}
                    style={{ width: `${Math.max(10, (passwordStrength.score / 6) * 100)}%` }}
                  ></div>
                </div>
                {passwordStrength.feedback.length > 0 && (
                  <ul className="feedback">
                    {passwordStrength.feedback.map((f, i) => (
                      <li key={i}>• {f}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>

        {/* فاحص الروابط المشبوهة */}
        <div className="tool-card">
          <div className="tool-title">
            <Shield /> <h2>فاحص الروابط المشبوهة</h2>
          </div>

          <div className="tool-body">
            <input
              type="url"
              placeholder="أدخل الرابط للفحص... (مثال: https://example.com)"
              value={phishingUrl}
              onChange={(e) => setPhishingUrl(e.target.value)}
            />
            <button className="gradient-btn" onClick={checkPhishingUrl} disabled={!phishingUrl}>
              فحص الرابط
            </button>

            {phishingResult && (
              <div className={`result-box ${phishingResult.color}`}>
                <h4>مستوى الخطر: {phishingResult.risk}</h4>
                <ul>
                  {phishingResult.warnings.map((w, i) => (
                    <li key={i}>⚠️ {w}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* نصائح */}
      <section className="tips">
        <h2>نصائح أمنية سريعة</h2>
        <div className="tips-grid">
          <div className="tip">
            <Lock className="tip-icon" />
            <h3>كلمات مرور قوية</h3>
            <p>استخدم كلمات مرور مختلفة ومعقدة لكل حساب.</p>
          </div>
          <div className="tip">
            <Shield className="tip-icon" />
            <h3>تحقق من الروابط</h3>
            <p>لا تنقر على الروابط المشبوهة، تحقق من عنوان الموقع.</p>
          </div>
          <div className="tip">
            <Eye className="tip-icon" />
            <h3>كن يقظاً</h3>
            <p>راقب الأنشطة المشبوهة بشكل دوري.</p>
          </div>
        </div>
      </section>

      {/* تحذير */}
      <div className="warning-box">
        <AlertTriangle className="warn-icon" />
        <div>
          <h3>تحذير مهم</h3>
          <p>
            هذه الأدوات مخصصة للأغراض التعليمية فقط. لا تدخل كلمات مرور حقيقية أو بيانات حساسة.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ToolsPage;
