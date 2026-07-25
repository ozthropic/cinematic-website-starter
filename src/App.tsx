import { useEffect, useRef } from "react";
import { content } from "./content";

export default function App() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let frame = 0;

    const updateVideo = () => {
      const video = videoRef.current;
      const hero = heroRef.current;
      if (!video || !hero || !Number.isFinite(video.duration)) return;

      const travel = Math.max(1, hero.offsetHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, window.scrollY / travel));
      const nextTime = progress * Math.max(0, video.duration - 0.08);
      if (Math.abs(video.currentTime - nextTime) > 0.025) video.currentTime = nextTime;
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateVideo);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    videoRef.current?.addEventListener("loadedmetadata", updateVideo);
    updateVideo();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      videoRef.current?.removeEventListener("loadedmetadata", updateVideo);
    };
  }, []);

  return (
    <div className="site-shell">
      <div className="video-backdrop" aria-hidden="true">
        <video ref={videoRef} src="/media/hero.mp4" muted playsInline preload="auto" />
        <div className="video-shade" />
      </div>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label={`${content.brand} home`}>
          <img src="/assets/nexa-studio-logo.svg" alt={content.brand} />
        </a>
        <nav>{content.nav.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}</nav>
        <a className="button button-light" href={content.contact.url}>Book now</a>
      </header>

      <main id="top">
        <section className="cinematic-hero" ref={heroRef}>
          <div className="hero-sticky">
            <div className="hero-copy">
              <p className="eyebrow">{content.hero.eyebrow}</p>
              <h1>{content.hero.title}</h1>
              <p className="lead">{content.hero.body}</p>
            </div>
            <span className="scroll-cue">Scroll to explore</span>
          </div>
        </section>

        <section className="content-section" id="services">
          <p className="eyebrow">SERVICES</p>
          <h2>Practical services for real work.</h2>
          <div className="card-grid">
            {content.services.map((service) => <article className="glass-card" key={service.title}><h3>{service.title}</h3><p>{service.body}</p></article>)}
          </div>
        </section>

        <section className="content-section split-section" id="promise">
          <p className="eyebrow">OUR PROMISE</p>
          <div><h2>{content.promise.title}</h2><p className="lead">{content.promise.body}</p></div>
        </section>

        <section className="content-section" id="process">
          <p className="eyebrow">PROCESS</p>
          <h2>Four clear steps.</h2>
          <ol className="process-list">{content.process.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ol>
        </section>

        <section className="content-section final-cta" id="contact">
          <div><p className="eyebrow">CONTACT</p><h2>{content.contact.title}</h2><p className="lead">{content.contact.body}</p></div>
          <a className="button button-dark" href={content.contact.url}>{content.contact.button}</a>
        </section>
      </main>

      <footer><strong>{content.brand}</strong><span>Replace this footer with your business details.</span></footer>
    </div>
  );
}
