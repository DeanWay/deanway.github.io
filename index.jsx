const React = require('react');
const { renderToString } = require('react-dom/server');
const { html } = require('js-beautify');
const { experience } = require('./data')

const ExperienceRow = ({ title, company, duration, description }) => (
  <div className='experience-row'>
    <div className='job-title'>{title}</div>
    <div className='company-name'>{company}</div>
    <div className='job-duration'>{duration}</div>
  </div>
)

const ExperienceSection = ({experience}) => {
  const experienceRows = experience.map(
    (item, index) => <ExperienceRow key={index} {...item}/>
  );
  return (
    <div className='experience-section'>
      {experienceRows}
    </div>
  );
}

const generateStaticMarkup = (body) => {
  return renderToString(
    <html>
    <head>
      <title>DeanWay</title>
      <link rel="stylesheet" type="text/css" href="index.css"/>
    </head>
    <body>
      {body}
    </body>
    </html>
  );
}

const formatHtml = (document) => {
  return html(`<!DOCTYPE html>${document}`)
}

console.log(formatHtml(generateStaticMarkup(<ExperienceSection experience={experience}/>)))