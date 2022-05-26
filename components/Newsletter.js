export default function Newsletter() {
  return (
    <section className="body-font">
      <div className="container px-5 py-24 mx-auto mt-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4">
            Get latest blog article in your inbox.
          </h2>
          <p> I will not spam. I will not sell your data. Ever.</p>
        </div>
        <div className="px-8 space-y-4">
          <form
            data-netlify="true"
            action="https://tinyletter.com/shrutikapoor"
            method="post"
            target="popupwindow"
            onSubmit={() =>
              window.open(
                'https://tinyletter.com/shrutikapoor',
                'popupwindow',
                'scrollbars=yes,width=800,height=600'
              )
            }
          >
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <input
                type="email"
                id="tlemail"
                name="email"
                placeholder="Email"
                className="bg-gray-200 bg-opacity-50 rounded border border-gray-100 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 mx-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <input type="hidden" value="1" name="embed" />
              <input
                type="submit"
                value="Subscribe"
                className="bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg body-font"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
