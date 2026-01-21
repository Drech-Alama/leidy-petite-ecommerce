export default function ButtonLandingLeidyPetite() {
  return (
    <a
      href="https://landing-leidypetite.netlify.app"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-5 right-24 z-50
        w-14 h-14
        rounded-full
        bg-[var(--color-medio)]
        flex items-center justify-center
        shadow-lg
        transition-transform duration-300
        hover:scale-110 hover:shadow-2xl
      "
    >
      <img
        src="/iconLeidyPetite.png"
        alt="Leidy Petite"
        className="w-12 h-12 object-contain"
      />
    </a>
  );
}
