import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='mockAI_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/syifanalfiah", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Journals with <br className='max-md:hidden' />
        <span className='purple_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
      make it easier for you to summarize a journal article, use mockAI
      </h2>
    </header>
  );
};

export default Hero;