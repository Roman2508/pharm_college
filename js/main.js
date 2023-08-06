$(document).ready(function () {
  const defaultSliderSettings = {
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 1,
    cssEase: 'linear',
  }

  /* events slider */
  // $('.events__slider').slick({
  //   ...defaultSliderSettings,
  //   arrows: true,
  // })

  /* events2 slider */
  // $('.events2__slider').slick({
  //   ...defaultSliderSettings,
  //   arrows: true,
  // })

  /* videos slider */
  // $('.videos__slider-box').slick({
  //   ...defaultSliderSettings,
  //   fade: true,
  //   dots: true,
  //   dotsClass: 'videos__slider-dost',
  //   customPaging: function (slider, i) {
  //     return i + 1 + '/' + slider.slideCount
  //   },
  // })

  // $('.videos2__slider').slick({
  //   ...defaultSliderSettings,
  //   arrows: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  // })
})

const headerEl = document.getElementById('header-nav')
const headerTriangleElements = document.querySelectorAll('.triangle')

let index = 2

window.addEventListener('scroll', function (e) {
  const scrollSize = window.pageYOffset

  if (scrollSize > 82) {
    headerEl.style.top = '0'
    headerEl.style.position = 'fixed'
    // headerEl.style.backgroundColor = 'rgba(255, 255, 255, .8)'
    headerEl.style.backgroundColor = '#1d5d9b'
    headerEl.style.backdropFilter = 'blur(20px)'
    // headerEl.style.color = '#000'
    headerEl.style.boxShadow = '0px 10px 8px -6px rgba(34, 60, 80, 0.2)'

    // if (headerTriangleElements.length > 0) {
    //   headerTriangleElements.forEach((el) => {
    //     el.style.borderTopColor = '#000'
    //     console.log(el.style.borderTopColor)
    //   })
    // }
  } else {
    headerEl.style.top = '80px'
    headerEl.style.color = '#ffffff'
    headerEl.style.backdropFilter = 'none'
    headerEl.style.backgroundColor = '#ffffff00'
    headerEl.style.position = 'relative'
    headerEl.style.boxShadow = 'none'

    if (headerTriangleElements.length > 0) {
      headerTriangleElements.forEach((el) => {
        el.style.borderTopColor = '#fff'
      })
    }
  }
})

/* select */

const select = function () {
  const selectHeader = document.querySelectorAll('.select__head')
  const selectItem = document.querySelectorAll('.select__item')

  selectHeader.forEach((item) => item.addEventListener('click', selectToggle))

  selectItem.forEach((item) => item.addEventListener('click', selectChoose))

  function selectToggle() {
    this.parentElement.classList.toggle('is-active')
  }

  function selectChoose() {
    const text = this.innerText
    const select = this.closest('.select')
    const currentElement = select.querySelector('.select__current')
    currentElement.innerText = text
    select.classList.remove('is-active')
  }
}

select()

/* // select */

/* accordion */
const accordionsArray = document.querySelectorAll('[data-accordion]')

if (accordionsArray.length > 0) {
  const accordionsRegular = Array.from(accordionsArray) /* .filter(function (el) {
    return !el.dataset.accordion.split(',')[0]
  }) */

  if (accordionsRegular.length > 0) {
    initAccordions(accordionsRegular)
  }

  function initAccordions(accordionsArray) {
    accordionsArray.forEach((el) => {
      el.classList.add('accordion-init')
      initAccordionBody(el)
      el.addEventListener('click', setSpoilerAction)
    })
  }

  function initAccordionBody(accrodionBlock) {
    const accrodionTitles = accrodionBlock.querySelectorAll('[data-accordion-item]')

    if (accrodionTitles.length > 0) {
      accrodionTitles.forEach((el) => {
        el.removeAttribute('tabindex')

        if (!el.classList.contains('accordion-active')) {
          el.nextElementSibling.hidden = true
        }
      })
    }
  }

  function setSpoilerAction(e) {
    const el = e.target

    if (el.hasAttribute('data-accordion-item') || el.closest('[data-accordion-item]')) {
      const accordionTitle = el.hasAttribute('data-accordion-item') ? el : el.closest('[data-accordion-item]')
      const accordionBlock = accordionTitle.closest('[data-accordion]')
      const oneSpoiler = accordionBlock.hasAttribute('data-one-accordion') ? true : false

      if (!accordionBlock.querySelectorAll('._slide').length) {
        if (oneSpoiler && !accordionTitle.classList.contains('accordion-active')) {
          hideAccordionBody(accordionBlock)
        }

        accordionTitle.classList.toggle('accordion-active')
        _slideToggle(accordionTitle.nextElementSibling, 500)
      }
      e.preventDefault()
    }
  }

  function hideAccordionBody(accordionBlock) {
    const accordionActiveTitle = accordionBlock.querySelector('[data-accordion-item].accordion-active')

    if (accordionActiveTitle) {
      accordionActiveTitle.classList.remove('accordion-active')
      _slideUp(accordionActiveTitle.nextElementSibling, 500)
    }
  }

  /*  */
}

function _slideUp(target, duration = 500) {
  if (!target.classList.contains('_slide')) {
    target.classList.add('_slide')
    target.style.transitionProperty = 'height, margin, padding'
    target.style.transitionDuration = duration + 'ms'
    target.style.height = target.offsetHeight + 'px'
    target.offsetHeight
    target.style.overflow = 'hidden'
    target.style.height = '0'
    target.style.paddingTop = '0'
    target.style.paddingBottom = '0'
    target.style.marginTop = '0'
    target.style.marginBottom = '0'
    window.setTimeout(() => {
      target.hidden = true
      target.style.removeProperty('height')
      target.style.removeProperty('padding-top')
      target.style.removeProperty('padding-bottom')
      target.style.removeProperty('margin-top')
      target.style.removeProperty('margin-bottom')
      target.style.removeProperty('overflow')
      target.style.removeProperty('transition-duration')
      target.style.removeProperty('transition-property')
      target.classList.remove('_slide')
    }, duration)
  }
}

function _slideDown(target, duration = 500) {
  if (!target.classList.contains('_slide')) {
    target.classList.add('_slide')
    if (target.hidden) {
      target.hidden = false
    }
    let height = target.offsetHeight

    target.style.overflow = 'hidden'
    target.style.height = '0'
    target.style.paddingTop = '0'
    target.style.paddingBottom = '0'
    target.style.marginTop = '0'
    target.style.marginBottom = '0'
    target.offsetHeight
    target.style.transitionProperty = 'height, margin, padding'
    target.style.transitionDuration = duration + 'ms'
    target.style.height = height + 'px'

    target.style.removeProperty('padding-top')
    target.style.removeProperty('padding-bottom')
    target.style.removeProperty('margin-top')
    target.style.removeProperty('margin-bottom')

    window.setTimeout(() => {
      target.style.removeProperty('height')
      target.style.removeProperty('overflow')
      target.style.removeProperty('transition-duration')
      target.style.removeProperty('transition-property')
      target.classList.remove('_slide')
    }, duration)
  }
}

function _slideToggle(target, duration = 500) {
  if (target.hidden) {
    return _slideDown(target, duration)
  } else {
    return _slideUp(target, duration)
  }
}
/* // accordion */

//

/* slider swiper */
// const swiper1 = document.querySelector('.events2')
// const swiperSlider1 = new Swiper(swiper1, {
//   centeredSlides: true,
//   slidesPerView: 'auto',
//   loop: true,
//   spaceBetween: 100,
// })

const swiperParams = {
  loop: true,
  speed: 800,
  centeredSlides: true,
  spaceBetween: 50,
  slidesPerView: 2,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // autoplay: {
  //   delay: 5000,
  // },
}

new Swiper('.videos2__slider', {
  ...swiperParams,
  spaceBetween: 80,
})

new Swiper('.swiper', {
  ...swiperParams,
  // loopedSlides: 10,
  // effect: 'coverflow',
  // grabCursor: true,

  // spaceBetween: 80,

  // coverflowEffect: {
  //   rotate: 0,
  //   stretch: 0,
  // },
})

/* // slider swiper */

/* image gallery */
// if (Fancybox) {
//   const fancyboxOptions = {
//     hideScrollbar: false,
//     animated: false,
//     contentClick: 'toggleZoom',
//     groupAll: true,
//   }

//   Fancybox.bind('#gallery1 a', fancyboxOptions)
//   Fancybox.bind('#gallery2 a', fancyboxOptions)
//   Fancybox.bind('#gallery3 a', fancyboxOptions)
// }
/* // image gallery */
