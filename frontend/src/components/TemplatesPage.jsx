import React from 'react'

const templateData = [
  {
    title: 'Non-disclosure agreement',
    image: 'https://dummyimage.com/420x260',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Employment Agreement',
    image: 'https://dummyimage.com/420x260',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'End-user license agreement',
    image: 'https://dummyimage.com/420x260',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Privacy policy',
    image: 'https://dummyimage.com/420x260',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'End-user license agreement',
    image: 'https://dummyimage.com/420x260',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Contingent contract',
    image: 'https://dummyimage.com/420x260',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Partnership agreements',
    image: 'https://dummyimage.com/420x260',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Memorandum of understanding',
    image: 'https://dummyimage.com/420x260',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
]

const templateCard = ({ image, title, content }) => {
  return (
    <div className="w-full cursor-pointer p-4 md:w-1/2 lg:w-1/4">
      <a className="relative block h-48 overflow-hidden rounded">
        <img
          alt="ecommerce"
          className="block h-full w-full object-cover object-center"
          src={image}
        />
      </a>
      <div className="mt-4">
        {/* <h3 className="title-font mb-1 text-xs tracking-widest text-gray-500">
          {title}
        </h3> */}
        <h2 className="title-font text-lg font-medium text-white">{title}</h2>
      </div>
    </div>
  )
}

const TemplatesPages = () => {
  return (
    <div>
      <section className="body-font bg-gray-900 text-gray-400">
        <div className="container mx-auto px-5 py-24">
          <div className="-m-4 flex flex-wrap">
            {templateData.map((template) => {
              return templateCard(template)
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default TemplatesPages
