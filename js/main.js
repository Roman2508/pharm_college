$(document).ready(function () {
  const defaultSliderSettings = {
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 1,
    cssEase: 'linear',
  }

  /* events slider */
  $('.events__slider').slick({
    ...defaultSliderSettings,
    arrows: true,
  })

  /* events2 slider */
  $('.events2__slider').slick({
    ...defaultSliderSettings,
    arrows: true,
  })

  /* videos slider */
  $('.videos__slider-box').slick({
    ...defaultSliderSettings,
    fade: true,
    dots: true,
    dotsClass: 'videos__slider-dost',
    customPaging: function (slider, i) {
      return i + 1 + '/' + slider.slideCount
    },
  })

  $('.videos2__slider').slick({
    ...defaultSliderSettings,
    arrows: true,
  })
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

const fancyboxOptions = {
  hideScrollbar: false,
  animated: false,
  contentClick: 'toggleZoom',
  groupAll: true,
}

Fancybox.bind('#gallery1 a', fancyboxOptions)

Fancybox.bind('#gallery2 a', fancyboxOptions)
