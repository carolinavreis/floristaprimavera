import React, { useState, useRef } from 'react';
import { Instagram, Facebook, Mail, MapPin, Phone, Clock, Menu, X } from 'lucide-react';
import emailjs from '@emailjs/browser';
import styles from './App.module.css';
import logo from './media/logo-horizontal.png';
import personalizadoImage from './media/personalizado.jpg';
import eventoImage from './media/arranjos.jpg';
import boquetImage from './media/casamento1.jpg';
import bgWood from './media/bg-wood.jpg';

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const formRef = useRef();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ type: 'loading', message: 'A enviar mensagem...' });

    emailjs.sendForm(
      'service_floristaprimaver', // ID do serviço que você criou no EmailJS
      'template_floristaprimave', // ID do template que você criou no EmailJS
      formRef.current,
      'jQE4EQ9QF2HyiprLS' // Sua Public Key do EmailJS
    )
      .then((result) => {
        setFormStatus({ type: 'success', message: 'Mensagem enviada com sucesso!' });
        formRef.current.reset();
      })
      .catch((error) => {
        console.error('Erro:', error);
        setFormStatus({ type: 'error', message: 'Erro ao enviar mensagem. Por favor, tente novamente.' });
      });
  };

  return (
    <div className={styles.app}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerContent}>
            <div className={styles.logo} onClick={scrollToTop} style={{ cursor: 'pointer' }}>
              <img src={logo} alt="Florista Primavera" className={styles.logoImage} />
            </div>

            {/* Desktop Navigation */}
            <nav className={styles.desktopNav}>
              <a href="#sobre" className={styles.navLink}>Sobre Nós</a>
              <a href="#services" className={styles.navLink}>Serviços</a>
              <a href="#locations" className={styles.navLink}>Localizações</a>
              <a href="#contact" className={styles.navLink}>Contactar</a>
            </nav>

            {/* Social Icons */}
            <div className={styles.socialIcons}>
              <a href="https://www.facebook.com/profile.php?id=100063558701542" className={styles.socialLink} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/Floristaprimavera/" className={styles.socialLink} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button className={styles.mobileMenuButton} onClick={toggleMobileMenu} aria-label="Toggle menu">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.open : ''}`}>
            <nav className={styles.mobileNav}>
              <a href="#sobre" className={styles.navLink} onClick={toggleMobileMenu}>Sobre Nós</a>
              <a href="#services" className={styles.navLink} onClick={toggleMobileMenu}>Serviços</a>
              <a href="#locations" className={styles.navLink} onClick={toggleMobileMenu}>Localizações</a>
              <a href="#contact" className={styles.navLink} onClick={toggleMobileMenu}>Contactar</a>
              <div className={styles.footerSocial}>
                <a href="https://www.facebook.com/profile.php?id=100063558701542" className={styles.socialLink} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <Facebook size={20} />
                </a>
                <a href="https://www.instagram.com/Floristaprimavera/" className={styles.socialLink} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <Instagram size={20} />
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section 
        className={styles.hero} 
        style={{ backgroundImage: `url(${bgWood})` }}
      >
        <div className={styles.heroOverlay}></div>
        <div className={`${styles.container} ${styles.heroContent}`}>
          <div className={styles.heroText}>
            <p className={styles.heroTitle}>O prazer de viver com a Natureza</p>
            <p className={styles.heroDescription}>Arranjos florais para todas as ocasiões especiais da sua vida</p>
            <a href="#contact" className={styles.button}>
              Contacte-nos
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`${styles.section} ${styles.sectionWhite}`}>
        <div className={styles.container}>
          <div className={styles.sectionTitle}>
            <h2 className={styles.sectionHeading}>Os Nossos Serviços</h2>
            <div className={styles.divider}></div>
          </div>
          
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceImage}>
                <img src={personalizadoImage} alt="Casamentos" />
              </div>
              <div className={styles.serviceContent}>
                <h3 className={styles.serviceTitle}>Bouquets & Arranjos</h3>
                <p className={styles.serviceDescription}>Criações florais personalizadas para presentes e decoração.</p>
              </div>
            </div>
            
            <div className={styles.serviceCard}>
              <div className={styles.serviceImage}>
                <img src={boquetImage} alt="Casamentos" />
              </div>
              <div className={styles.serviceContent}>
                <h3 className={styles.serviceTitle}>Casamentos</h3>
                <p className={styles.serviceDescription}>Flores para o seu dia especial, desde bouquets a decorações.</p>
              </div>
            </div>
            
            <div className={styles.serviceCard}>
              <div className={styles.serviceImage}>
                <img src={eventoImage} alt="Eventos" />
              </div>
              <div className={styles.serviceContent}>
                <h3 className={styles.serviceTitle}>Eventos</h3>
                <p className={styles.serviceDescription}>Decorações florais para eventos corporativos e celebrações.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className={`${styles.section} ${styles.sectionGreen}`}>
        <div className={styles.container}>
          <div className={styles.sectionTitle}>
            <h2 className={styles.sectionHeading}>As Nossas Lojas</h2>
            <div className={styles.divider}></div>
          </div>
          
          <div className={styles.servicesGrid}>
            {/* Location 1 */}
            <div className={styles.serviceCard}>
              <h3 className={styles.serviceTitle}>Peniche</h3>
              <div className={styles.locationContact}>
                <MapPin className={styles.icon} size={18} />
                <span>Rua dos Herminios n.º 35 A</span>
              </div>
              <div className={styles.locationContact}>
                <Phone className={styles.icon} size={18} />
                <span>262 787 946</span>
              </div>
              <div className={styles.locationContact}>
                <Clock className={styles.icon} size={18} />
                <span>Segunda - Sexta: 9:00 - 13:00 | 15:00 - 19:00</span>
                <span>Sábados: 9:00 - 13:00</span>
              </div>
              <div className={styles.mapContainer}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.123456789012!2d-9.3811!3d39.3556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1e2c9c9c9c9c9c%3A0x0!2sRua%20dos%20Herminios%2035A%2C%20Peniche!5e0!3m2!1spt-PT!2spt!4v1234567890"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa Florista Primavera Peniche"
                ></iframe>
              </div>
            </div>
            
            {/* Location 2 */}
            <div className={styles.serviceCard}>
              <h3 className={styles.serviceTitle}>Atouguia da Baleia</h3>
              <div className={styles.locationContact}>
                <MapPin className={styles.icon} size={18} />
                <span>Rua Padre Faria Lopes n.º 21</span>
              </div>
              <div className={styles.locationContact}>
                <Phone className={styles.icon} size={18} />
                <span>262 758 151</span>
              </div>
              <div className={styles.locationContact}>
                <Clock className={styles.icon} size={18} />
                <span>Segunda - Sexta: 9:00 - 13:00 | 15:00 - 19:00</span>
                <span>Sábados: 9:00 - 13:00</span>
              </div>
              <div className={styles.mapContainer}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.123456789012!2d-9.3311!3d39.3356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1e2c9c9c9c9c9c%3A0x0!2sRua%20Padre%20Faria%20Lopes%2021%2C%20Atouguia%20da%20Baleia!5e0!3m2!1spt-PT!2spt!4v1234567890"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa Florista Primavera Atouguia da Baleia"
                ></iframe>
              </div>
            </div>
            
            {/* Location 3 */}
            <div className={styles.serviceCard}>
              <h3 className={styles.serviceTitle}>Mercado Municipal de Peniche</h3>
              <div className={styles.locationContact}>
                <MapPin className={styles.icon} size={18} />
                <span>Rua António Conceição Bento</span>
              </div>
              <div className={styles.locationContact}>
                <Clock className={styles.icon} size={18} />
                <span>Quintas, Sextas, Sábados e Domingos</span>
              </div>
              <div className={styles.locationContact}>
                <Clock className={styles.icon} size={18} />
                <span>9:00 - 13:00</span>
              </div>
              <div className={styles.mapContainer}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.123456789012!2d-9.3811!3d39.3556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1e2c9c9c9c9c9c%3A0x0!2sMercado%20Municipal%20de%20Peniche!5e0!3m2!1spt-PT!2spt!4v1234567890"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa Mercado Municipal de Peniche"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`${styles.section} ${styles.sectionWhite}`}>
        <div className={styles.container}>
          <div className={styles.sectionTitle}>
            <h2 className={styles.sectionHeading}>Contacte-nos</h2>
            <div className={styles.divider}></div>
            <p className={styles.serviceDescription}>Tem alguma questão ou deseja encomendar flores? Fale connosco e responderemos com todo o prazer.</p>
          </div>
          
          <div className={styles.form}>
            <form ref={formRef} onSubmit={handleSubmit} className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  name="user_name"
                  className={styles.input}
                  placeholder="O seu nome"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="user_email"
                  className={styles.input}
                  placeholder="O seu email"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.label}>Assunto</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  className={styles.input}
                  placeholder="Assunto da mensagem"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>Mensagem</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows="4" 
                  className={styles.textarea}
                  placeholder="A sua mensagem..."
                  required
                ></textarea>
              </div>
              <div className={styles.formGroup}>
                <button type="submit" className={styles.button}>
                  Enviar Mensagem
                </button>
                {formStatus.message && (
                  <p className={`${styles.formStatus} ${styles[formStatus.type]}`}>
                    {formStatus.message}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            <div>
              <div className={styles.footerLogo}>
                <div className={styles.logo}>
                  <img src={logo} alt="Florista Primavera" className={styles.logoImage} />
                </div>
              </div>
              <p>Arte floral para todas as ocasiões especiais desde 1995.</p>
            </div>
            
            <div>
              <h4 className={styles.footerHeading}>Navegação</h4>
              <ul className={styles.footerNav}>
                <li><a href="#" className={styles.footerLink}>Início</a></li>
                <li><a href="#sobre" className={styles.footerLink}>Sobre Nós</a></li>
                <li><a href="#services" className={styles.footerLink}>Serviços</a></li>
                <li><a href="#locations" className={styles.footerLink}>Localizações</a></li>
                <li><a href="#contact" className={styles.footerLink}>Contactar</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className={styles.footerHeading}>Contactos</h4>
              <ul className={styles.footerNav}>
                <li className={styles.footerContact}>
                  <Phone size={16} />
                  <span>262 787 946</span>
                </li>
                <li className={styles.footerContact}>
                  <Mail size={16} />
                  <span>info@floristaprimavera.pt</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className={styles.footerHeading}>Siga-nos</h4>
              <div className={styles.footerSocial}>
                <a href="https://www.facebook.com/profile.php?id=100063558701542" className={styles.footerSocialLink} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <Facebook size={20} />
                </a>
                <a href="https://www.instagram.com/Floristaprimavera/" className={styles.footerSocialLink} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className={styles.footerBottom}>
            <p>Copyright © 2025 | Florista Primavera | Todos os direitos reservados</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;