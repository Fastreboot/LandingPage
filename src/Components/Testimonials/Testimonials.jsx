import React, { useEffect } from 'react';
// import 'keen-slider/dist/keen-slider.min.css';

const Testimonials = () => {
  useEffect(() => {
    import('keen-slider').then(({ default: KeenSlider }) => {
      const keenSlider = new KeenSlider('#keen-slider', {
        loop: true,
        slides: {
          origin: 'center',
          perView: 1.25,
          spacing: 16,
        },
        breakpoints: {
          '(min-width: 1024px)': {
            slides: {
              origin: 'auto',
              perView: 1.5,
              spacing: 32,
            },
          },
        },
      });

      const keenSliderPrevious = document.getElementById('keen-slider-previous');
      const keenSliderNext = document.getElementById('keen-slider-next');
      const keenSliderPreviousDesktop = document.getElementById('keen-slider-previous-desktop');
      const keenSliderNextDesktop = document.getElementById('keen-slider-next-desktop');

      keenSliderPrevious.addEventListener('click', () => keenSlider.prev());
      keenSliderNext.addEventListener('click', () => keenSlider.next());
      keenSliderPreviousDesktop.addEventListener('click', () => keenSlider.prev());
      keenSliderNextDesktop.addEventListener('click', () => keenSlider.next());
    });
  }, []);
  return (
    <>
    

<link href="https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/keen-slider.min.css" rel="stylesheet" />



<section className="bg-gray-50">
  <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0">
<h4 className='text-gray-500  font-bold text-md sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-5 text-center'>Testimonials</h4>
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
      <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
        <h2 className="text-md sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-tight text-gray-900 text-center">
          Don't just take our word for it...
        </h2>

        <p className="mt-4 text-gray-700 text-sm sm:text-md md:text-xl lg:text-2xl xl:text-3xl">
        "We're always looking for ways to improve. Here's what our customers have to say about what we're doing well and where we can improve."
        </p>

        <div className="hidden lg:mt-8 lg:flex lg:gap-4">
          <button
            aria-label="Previous slide"
            id="keen-slider-previous-desktop"
            className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 rtl:rotate-180"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <button
            aria-label="Next slide"
            id="keen-slider-next-desktop"
            className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
          >
            <svg
              className="size-5 rtl:rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="-mx-6 lg:col-span-2 lg:mx-0">
        <div id="keen-slider" className="keen-slider">
          <div className="keen-slider__slide">
            <blockquote
              className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12"
            >
              <div>
                <div className="flex gap-0.5 text-green-500">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>

                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>

                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>

                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>

                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </div>

                <div className="mt-4">
                  <p className="font-bold text-rose-600 text-sm sm:text-md md:text-xl lg:text-2xl xl:text-3xl">ദൈവീകമായ യാത്രയായിരുന്നു ഈ 21 ദിവസം</p>

                  <p className="mt-4 leading-relaxed text-gray-700 font-normal">
                  അതിമനോഹരമായ, ശാന്തമായ, ദൈവീകമായ യാത്രയായിരുന്നു ഈ 21 ദിവസം. എത്ര നന്ദിപറഞ്ഞാലും തീരില്ല.. ജീവിതത്തിൽ പുറം ലോകത്തെ സന്തോഷത്തിൽ മാത്രം ശ്രെദ്ധിച്ചിരുന്ന ഞാൻ ഇപ്പോൾ നമ്മുടെ ഉള്ളിലെ നിലക്കാത്ത സന്തോഷത്തിന്റെ ഉറവിടം കണ്ടെത്താൻ സാധിച്ചിരിക്കുന്നു. 🙏🏻. ജീവിതത്തിന്റെ ശാന്തി, സ്നേഹം, സന്തോഷം, ശക്തി, ആനന്ദം എല്ലാം നമ്മൾ തന്നെയാണെന്ന തിരിച്ചറിവ് നൽകിയ ഈ മെഡിറ്റേഷൻ യാത്രയിൽ കൂടെയുണ്ടായിരുന്ന ജൈസ്മാമിനും, റാഫി സാറിനും, അതുൽ സാറിനും നന്ദി 🙏🏻🙏🏻🙏🏻. ക്ലാസ്സിൽ കൂടെ ഉണ്ടായിരുന്ന മറ്റു കൂട്ടുകാർക്കും നന്ദി 🙏🏻🙏🏻🙏🏻 തിരിച്ചറിവോടുകൂടിയുള്ള പുതിയ യാത്രയിൽ ജീവിതത്തിലെ പൂർണമായ ആനന്ദം നമ്മുക്ക് നേടാൻ സാധ്യമാകട്ടെ ❤🤍❤
                  </p>
                </div>
              <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                &mdash; Kishor Palakkad
              </footer>
              </div>

            </blockquote>
          </div>

          <div className="keen-slider__slide">
            <blockquote
              className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12"
            >
              <div>
                <div className="flex gap-0.5 text-green-500">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>

                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>

                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>

                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>

                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </div>

                <div className="mt-4">
                  <p className=" font-bold text-rose-600 text-sm sm:text-md md:text-xl lg:text-2xl xl:text-3xl">ഇന്നർ ലൈറ്റ് മെഡിറ്റേഷൻ ക്ലാസ് വളരെ ഉപകാരപ്രദമായിരുന്നു</p>

                  <p className="mt-4 leading-relaxed text-gray-700">
                  ഇന്നർ ലൈറ്റ് മെഡിറ്റേഷൻ ക്ലാസ് വളരെ ഉപകാരപ്രദമായിരുന്നു. 
                  ബ്രീത്തിങ് ബ്രീത്ത് ഔട്ട് എക്സസൈസ്  പ്രകൃതിയുമായി ഇണങ്ങിച്ചേർന്ന ജീവിതം സ്പിരിച്വൽ ഡെവലപ്മെന്റ് ചക്ര എക്സസൈസ് ഡയഫ്രമാറ്റിക് എക്സസൈസ് ഇന്നർ ചൈൽഡ് ഹീലിംഗ് തെറാപ്പി ഇവയെല്ലാം ഒന്നിനൊന്നു മെച്ചം. 
                  ക്ലാസ് കൈകാര്യം ചെയ്ത അതുൽ സാർ,റാഫി സാർ, ജയ്സി മാഡം ഇവർക്ക് പ്രത്യേക നന്ദി.
                  ക്ലാസ്സ് നടത്തിയ എല്ലാവർക്കും എല്ലാവിധ ഭാവുകങ്ങളും നേരുന്നു. നന്ദി.
                  </p>
                </div>
              <footer className="mt-4 text-sm font-semibold text-gray-700 sm:mt-6">
                &mdash; പ്രൊഫസർ ഗായത്രി, കണ്ണൂർ
              </footer>
              </div>

            </blockquote>
          </div>

          <div className="keen-slider__slide">
            <blockquote
              className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12"
            >
              <div>
                <div className="flex gap-0.5 text-green-500">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>

                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>

                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>

                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>

                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </div>

                <div className="mt-4">
                  <p className=" font-bold text-rose-600 text-sm sm:text-md md:text-xl lg:text-2xl xl:text-3xl">Peeps Talks 🔥👍</p>

                  <p className="mt-4 leading-relaxed text-gray-700">
                        I’m Sorry to tell 🙏 recently noticed this group activities ….really positive and creative discussion (Thinking and sharing) great contribution from everyone … Salute this ideas f peeps talks🫡 

                        When we r board or disappointed group will charge us ❤❤❤ 

                        Thank You Teams Fastreboot 🥰

                  </p>
                </div>
              <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                &mdash; Navodh CC
              </footer>
              </div>

            </blockquote>
          </div>
          <div className="keen-slider__slide">
            <blockquote
              className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12"
            >
              <div>
                <div className="flex gap-0.5 text-green-500">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>

                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>

                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>

                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>

                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </div>

                <div className="mt-4">
                  <p className="font-bold text-rose-600 text-sm sm:text-md md:text-xl lg:text-2xl xl:text-3xl">Response To what's the most valuable gift in your Life?</p>

                  <p className="mt-4 leading-relaxed text-gray-700">
                  

                  kurreee ind my parents my family my soulmate my friends enne snehichavarum enne ozhivakki poyavarum thanna life experience. ente santhoshathilum sankadathilum koode ninnavar especially ente ummi ❤ unconditional aayi yathoru parathiyum illathe enne snehikuna ente ummi. pinne njn nthaan ente kazhiv nthaan enn mansailakki thanna fast reboot team especially akshay sir anilkumar sir sree hari bro sherin mam Sreehari sir, Fasmina mam angane ee grpil ulla ella membersum thanna arivukalum and avrde life experience ithokke ann ennik lifil kittiya most valuable gift

                  </p>
                </div>
              <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                &mdash; Deeraj p
              </footer>
              </div>

            </blockquote>
          </div>
          <div className="keen-slider__slide">
            <blockquote
              className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12"
            >
              <div>
                <div className="flex gap-0.5 text-green-500">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>

                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>

                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>

                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>

                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </div>

                <div className="mt-4">
                  <p className=" font-bold text-rose-600 text-sm sm:text-md md:text-xl lg:text-2xl xl:text-3xl">It’s a precious gift I reached here</p>

                  <p className="mt-4 leading-relaxed text-gray-700">
                  എല്ലാവരും പറയുന്നത് പോലെ.
                  പല സമയത്ത് ഒരുപാട് precious things gift ആയി തോന്നിയിട്ടുണ്ട്.
                  Parents.
                  Teachers.
                  Friends.
                  Love .
                  അവിടെന്നു ഓക്കേ തളർന്ന് നിന്നപോ
                  Lifil oru second chance kitty
                  Because of Fastreboot community.  It’s a precious gift I reached here.
                  </p>
                </div>
              <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                &mdash; Afsal S
              </footer>
              </div>

            </blockquote>
          </div>
          <div className="keen-slider__slide">
            <blockquote
              className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12"
            >
              <div>
                <div className="flex gap-0.5 text-green-500">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>

                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>

                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>

                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>

                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </div>

                <div className="mt-4">
                  <p className=" font-bold text-rose-600 text-sm sm:text-md md:text-xl lg:text-2xl xl:text-3xl">Boosted my Confidence</p>

                  <p className="mt-4 leading-relaxed text-gray-700">
                  എന്നിൽ എനിക്ക് പല ന്നല്ല സ്വഭാവങ്ങളും എന്നിൽ ഉണ്ടായിരുന്നു അതെല്ലാം എന്നിൽ നിന്ന് നഷ്ടപെട്ട് പോയിരുന്നു അതല്ല അതെല്ലാം അവിടെത്തന്നെയുണ്ട് അതെല്ലാം എന്തൊക്കെയോ കാരണങ്ങളാൽ ഞാൻ തന്നെ മൂടി വെച്ചിരിക്കുകയാണെന്നാണ് എനിക്ക് തോന്നാറുള്ളത് ...
                  എന്നാൽ ഇന്ന് ഇപ്പം ഞാൻ ഈ ക്ലാസിൽ കയറിയതോടെ എന്റെ ഉള്ളിൽ മൂടി വെച്ചിരിക്കുന്ന ഞാൻ എനിക്ക് നഷ്ടപെട്ട് പോയി എന്ന് വിശ്വസിച്ചിരുന്ന ഓരോ ഗുണങ്ങളെയും ഞാൻ പൊടി തട്ടി എടുത്തു കൊണ്ടിരിക്കുന്നു ... ഒറ്റയടിക്ക് ഒരു മാറ്റം കഴിയില്ലല്ലോ ...
                  എങ്കിലും ഞാൻ ഇതു പോലുള്ള ക്ലാസിൽ കയറി അനിൽകുമാർ സാറിന്റെ ട്ടോപ്പിക്കുകൾ സ്ഥിരമായി കേട്ട്ഞാൻ എന്നെ തന്നെ മാറ്റിയെടുക്കുന്നു ...
                  ഓരോ ദിവസം ചെല്ലുന്തോറും ഓരോ നിമിഷം ചെല്ലുന്തോറും ഞാൻ മാറി മാറി വരുന്നുണ്ട് എന്ന് എനിക്ക് തന്നെ അറിയാൻ കഴിയുന്നുണ്ട് ...
                  എല്ലാവരോടും വളരെ അധികം നന്ദി നന്ദി നന്ദി ..

                  </p>
                </div>
              <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                &mdash; Nandhu 
              </footer>
              </div>

            </blockquote>
          </div>
          <div className="keen-slider__slide">
            <blockquote
              className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12"
            >
              <div>
                <div className="flex gap-0.5 text-green-500">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>

                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>

                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>

                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>

                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </div>

                <div className="mt-4">
                  <p className="font-bold text-rose-600 text-sm sm:text-md md:text-xl lg:text-2xl xl:text-3xl">സമാധാനം, സന്തോഷം 
                  പോസറ്റീവ് ആയ മാറ്റം എന്നിലും എൻ്റെ പ്രവർത്തി കളിലും ഉണ്ടാക്കുന്നു</p>

                  <p className="mt-4 leading-relaxed text-gray-700">
                  ഓരോ ധ്യാന ശേഷം ചെറിയ മാറ്റങ്ങൾ എന്നിൽ ഉണ്ടാക്കുന്നു. ചുരുങ്ങിയ ദിവസങ്ങൾ കൊണ്ട് തന്നെ ചെറിയ കാര്യങ്ങൾ വലിയ തരത്തിൽ ഉള്ള മാറ്റം എന്നിൽ  ഓരോ ദിവസങ്ങളിൽ എനിക്ക് കാണാൻ സാധിക്കുന്നു.
                  ഞാൻ സന്തോഷവാൻ ആണ്. എൻ്റെ സന്തോഷം സ്വയം എനിക്ക് നിർത്താൻ സാധിക്കാത്ത വണ്ണം ഞാൻ  സന്തോഷിക്കുന്നു ഓരോ നിമിഷവും '😊
                  മെച്ചപ്പെട്ട മാനസികവസ്ഥ, സമാധാനം, സന്തോഷം 
                  പോസറ്റീവ് ആയ മാറ്റം എന്നിലും എൻ്റെ പ്രവർത്തി കളിലും ഉണ്ടാക്കുന്നു'......
                  ഇത്തരം ഒരു മാറ്റത്തിനു കാരണമായ Inner Light എന്ന പ്രോഗ്രം ഞങ്ങൾക്കു വേണ്ടി നിയന്ത്രിക്കുന്ന എല്ലാ മെമ്പർമാർക്കും  ഒരായിരം നന്ദി


                  </p>
                </div>
              <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                &mdash; Ramachandran
              </footer>
              </div>

            </blockquote>
          </div>

        </div>
      </div>
    </div>

    <div className="mt-8 flex justify-center gap-4 lg:hidden">
      <button
        aria-label="Previous slide"
        id="keen-slider-previous"
        className="rounded-full border border-rose-600 p-4 text-rose-600 transition hover:bg-rose-600 hover:text-white"
      >
        <svg
          className="size-5 -rotate-180 transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      </button>

      <button
        aria-label="Next slide"
        id="keen-slider-next"
        className="rounded-full border border-rose-600 p-4 text-rose-600 transition hover:bg-rose-600 hover:text-white"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      </button>
    </div>
  </div>
</section>
    </>

    
  )
}

export default Testimonials
