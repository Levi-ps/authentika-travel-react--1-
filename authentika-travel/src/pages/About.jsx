import styles from './About.module.css';
import aboutImg from '../assets/desert.jpg';

const MISSIONS = [
  { icon: '🌍', fr: 'Valoriser le territoire', en: 'Showcase the territory', ar: 'تثمين التراب' },
  { icon: '🤝', fr: 'Soutenir les communautés', en: 'Support communities', ar: 'دعم المجتمعات' },
  { icon: '🌱', fr: 'Promouvoir la durabilité', en: 'Promote sustainability', ar: 'تعزيز الاستدامة' },
  { icon: '✈️', fr: 'Ouvrir le Sud au monde', en: 'Open the South to world', ar: 'فتح الجنوب على العالم' },
  { icon: '💡', fr: 'Innover pour l’avenir', en: 'Innovate for tomorrow', ar: 'الابتكار للمستقبل' }
];
export default function About({ t, lang }) {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.imageSide}>
          <img src={aboutImg} alt="Authentika Travel" />
        </div>
        <div className={styles.contentSide}>
          <h2>{t('À Propos', 'About Us', 'من نحن')}</h2>
          <p>
            {t(
              'Authentika Travel est une agence engagée pour un tourisme durable et humain dans le Sud Tunisien.',
              'Authentika Travel is an agency committed to sustainable and human tourism in Southern Tunisia.',
              'أوثنتيكا ترافل هي وكالة ملتزمة بالسياحة المستدامة والبشرية في الجنوب التونسي.'
            )}
          </p>
          <ul className={styles.missionList}>
            {MISSIONS.map((m, i) => (
              <li key={i}>
                <span>{m.icon}</span>
                <strong>{lang === 'fr' ? m.fr : lang === 'en' ? m.en : m.ar}</strong>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
