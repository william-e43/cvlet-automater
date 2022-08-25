import * as pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;


export const makePDF = (docDef, name) => {
  //make the PDF and download the PDF
  return  (pdfMake.createPdf(docDef).download(name, (err) => {
    if(err){
      console.log(err)
      return
    }}));
}

export const makeDocDef = (csvObj) => {
  //make docDef using csv object
  switch(csvObj['type']) {
    case 'FE':
      return makeFE(csvObj);
    case 'BE':
      return makeBE(csvObj);
    case 'FS':
      return makeFS(csvObj);
  }
}

const makeFE = ({company, fileName, title, fluff}) => {
  return {
    content: `${company} Hiring Team,

    I am drawn to ${company} by the company’s attitude of innovation that has allowed ${fluff}. Never settling for the status quo and always seeking to innovate existing systems are attitudes that resonate deeply with me. I am confident that my experience as a software engineer and my passion for innovation makes me a strong fit for the ${title} role.

    One of my greatest strengths as an engineer is my ability to put myself in the shoes of the user so that I can provide the best UI/UX  possible. My solid background with Javascript, React and styled components coupled with my strong attention to detail makes me an efficient and organized front end engineer who you can count on to get the job done in a way that maximizes value and minimizes superfluous work.

    As an engineer on your team I will seek to foster community by facilitating open communication and being eager to receive and give thoughtful peer feedback.I love working with other engineers and I think it is valuable because it opens my mind to new ways of thinking which ultimately makes me a more creative and effective problem solver. It also opens the door for peer to peer feedback, which I have found to be  instrumental to my professional development and instrumental to the development of teams I have worked on in the past.

    My technical background along with my passion for innovation and my motivation to build strong communities makes me confident that I would be a great addition to the ${company} team. I would love to schedule an interview whenever your hiring team is available. I look forward to hearing more about this opportunity and the problems you have to solve.

    Best,
    William Eliason`}
}

const makeBE = ({company, fileName, title, fluff}) => {

  return {
    content: `${company} Hiring Team,

    I am drawn to ${company} by the company’s attitude of innovation that has allowed it to ${fluff}. Never settling for the status quo and always seeking to innovate existing systems are attitudes that resonate deeply with me. I am confident that my experience as a software engineer and my passion for innovation makes me a strong fit for the ${title} role.

    One of my greatest strengths as an engineer is my ability to quickly adapt to new situations and solve complex problems in creative and effective ways. My proficiency with NodeJS and SQL/NoSQL DBMS allows me to apply my strengths to any backend engineering problem that I am faced with. As a backend engineer I always consider the end user, and I do everything I can to deliver a high quality, frictionless UX.

    As an engineer on your team I will seek to foster community by facilitating open communication and being eager to receive and give thoughtful peer feedback. I love working with other engineers and I think it is valuable because it opens my mind to new ways of thinking which ultimately makes me a more creative and effective problem solver. It also opens the door for peer to peer feedback, which I have found to be  instrumental to my professional development and instrumental to the development of teams I have worked on in the past.

    My technical background along with my passion for innovation and my motivation to build strong communities makes me confident that I would be a great addition to the ${company} team. I would love to schedule an interview whenever your hiring team is available. I look forward to hearing more about this opportunity and the problems you have to solve.

    Best,
    William Eliason
    `
  }
}

const makeFS = ({company, fileName, title, fluff}) => {
  return {
    content: `${company} Hiring Team,

    I am drawn to ${company} by the company’s attitude of innovation that has allowed it to ${fluff}. Never settling for the status quo and always seeking to innovate existing systems are attitudes that resonate deeply with me. I am confident that my experience as a software engineer and my passion for innovation makes me a strong fit for the ${title} role.

    As an engineer on your team I will seek to foster community by facilitating open communication and being eager to receive and give thoughtful peer feedback. I love working with other engineers and I think it is valuable because it opens my mind to new ways of thinking which ultimately makes me a more creative and effective problem solver. It also opens the door for peer to peer feedback, which I have found to be  instrumental to my professional development and instrumental to the development of teams I have worked on in the past.

    One of my greatest strengths as an engineer is my ability to quickly adapt to new situations and solve complex problems in creative and effective ways. My strong background with Javascript and React makes me an efficient and organized front end engineer, while my NodeJS and SQL/NoSQL skills allows me to fully understand and solve large and complicated back end engineering problems in order to deliver a high quality, frictionless UX.

    My technical background along with my passion for innovation and my motivation to build strong communities makes me confident that I would be a great addition to the ${company} team. I would love to schedule an interview whenever your hiring team is available. I look forward to hearing more about this opportunity and the problems you have to solve.

    Best,
    William Eliason`}

}