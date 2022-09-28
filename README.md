# Frontend Mentor - QR code component solution

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt/hub/expenses-chart-component-XCDivY5Qfz). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### Screenshot
- Desktop view
![](./src/assets/images/for_readme/desktop.png)

- Mobile View
![](./src/assets/images/for_readme/mobile.png)


### Links

- Solution URL: https://github.com/mrxshinji/Testimonial-slider
- Live Site URL: https://mrxshinji.github.io/Testimonial-slider


## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- React

### What I learned

- Sliding multiple item left and right animation using React Transition Group

```js
  <TransitionGroup
      className="slide-zone" 
        childFactory={child => 
                React.cloneElement(child, { 
                    classNames: direction ? "slide-left" : "slide-right", 
                    timeout: 800 
                })
            }
      >
      {/* animation based on key={id} */}
      <CSSTransition
          key={id}
          timeout={800}
      >   
          {/* // SlideItem require: name, job, testimonial, image ...data search based on index*/}
          <SlideItem 
              key={data[id].id} 
              name={data[id].name}
              job={data[id].job}
              testimonial={data[id].testimonial}
              image={data[id].image}
          />
      </CSSTransition>
    </TransitionGroup>
```

### Continued development

- Animation with React 

### Useful resources

- [https://stackoverflow.com/] - Provide alot of insight on centering item.
- [https://www.w3schools.com/] - Provide alot help on syntax and how to use each method

## Author

- Website - [https://github.com/mrxshinji]
- Frontend Mentor - [@mrxshinji](https://www.frontendmentor.io/profile/mrxshinji)

## Acknowledgments

- [https://www.npmjs.com/package/react-transition-group] React-transition-group for its awesome animation package.
-[https://stackoverflow.com/questions/69809477/right-and-left-sliding-with-react-transition-group] thanks semihit for the solution
