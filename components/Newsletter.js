export default function Newsletter() {
  return (
    <section className="body-font">
      <div className="container px-5 py-8 mx-auto mt-12 mb-24">
        <div className="flex flex-col text-center w-full mb-12">
          <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4">
            Get latest blog articles in your inbox.
          </h2>
          <p> I will not spam. I will not sell your data. Ever.</p>
        </div>
        <div className="px-8 space-y-4">
          <iframe
            src="https://shrutikapoor.substack.com/embed"
            width="800"
            height="300"
          ></iframe>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a href="https://shrutikapoor.substack.com/?utm_source=substack&utm_medium=web&utm_campaign=substack_profile">
              View previous newsletters
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
