export default function LocationSection() {
    return (
      <section className="container mx-auto py-10">
        <h2 className="text-3xl font-bold text-center mb-6">Local</h2>
        <div className="w-full h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3707.414113758728!2d-51.07846422381142!3d-21.686637195408327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9496a32df02f3b07%3A0x761af66ab41363d9!2sBarbearia%20Sala%20Sete!5e0!3m2!1spt-PT!2sbr!4v1726228601274!5m2!1spt-PT!2sbr"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            aria-hidden="false"
            tabIndex="0"
            className="rounded-lg border"
          ></iframe>
        </div>
      </section>
    );
  }
  