import React from 'react'


const Contact = () => {
  return (
    <section
      id="contact"
      data-theme="black"
      className="min-h-screen py-20 bg-[radial-gradient(circle_at_top_left,#ffffff08_30%,transparent_31%),radial-gradient(circle_at_bottom_right,#ffffff08_30%,transparent_31%)] bg-size-[6em_6em]"
    >
      <div className="text-center mb-12 justify-center1">
        <p className="  text-sm font-medium mb-2 text-indigo-600">Contact Me</p>
        <h2 className="text-2xl font-bold text-white">Get In Touch</h2>
        <p className="text-gray-500">
          Feel free to reach out to me for any inquiries or opportunities.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-14">
          {/*left section*/}

          <div className="flex-1 text-center md:text-left animate-left ">
            <div className="lg:col-span-2 space-y-4">

              <div className="flex items-center gap-4 p-4 rounded-xl border border-border border-gray-800 bg-card/50 w-100">
                {" "}
                <i className="fa-solid fa-envelope text-xl text-indigo-500"></i>{" "}
                <div>
                  <p className=" text-gray-500 text-xs ">Email</p>
                  <p className="text-white font-medium">thandululo99@gmail.com</p>
                </div>

              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl border border-border border-gray-800 bg-card/50 w-100">
                {" "}
                <i className="fa-solid fa-phone text-xl text-indigo-500"></i>{" "}
                <div>
                  <p className=" text-gray-500 text-xs ">Phone</p>
                  <p className="text-white font-medium">+27 66 550 9434</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-8 rounded-xl border border-border border-gray-800 bg-card/50 w-100"></div>
            </div>
          </div>

          {/*right section*/}
          <div className="flex-1 w-full max-w-xl animate-right">
            <form
              action=""
              className="space-y-4 p-5 sm:p-6 rounded-xl border border-border bg-card/50"
            ></form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact
