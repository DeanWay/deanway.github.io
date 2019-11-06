const job = (title, company, duration, description) => ({
  title, company, duration, description
})

const experience = [
  job(
    'Senior Software Developer',
    'Freshbooks',
    'April 2016 - Present'
  ),
  job(
    'Software Developer',
    'Freshbooks',
    'May 2017 - April 2019'
  ),
  job(
    'Data Engineer',
    'Freshbooks',
    'October 2016 - May 2017'
  ),
  job(
    'Software Development Intern',
    'Freshbooks',
    'May 2016 - August 2016'
  ),
  job(
    'Software Development Intern',
    'The Hospital for Sick Children',
    'May 2015 - August 2015'
  ),
]

const education = [
  'Bachelor of Computing, Computer Science - University of Guelph'
]

const openSourceContributions = [
  {
    project: 'pydantic-jsonapi',
    role: 'Author',
    description: "a JSON:api validation library using python 3 type annotations",
    link: "https://github.com/DeanWay/pydantic-jsonapi"
  }
]

module.exports = {
  experience,
  education,
  openSourceContributions,
}