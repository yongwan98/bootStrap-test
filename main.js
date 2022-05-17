// import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'
// import Dropdown from 'bootstrap/js/dist/dropdown'
import Modal from 'bootstrap/js/dist/modal'

// 개별기능 modal
new Modal('#exampleModal', {
  backdrop: 'static'
})

// 개별기능 dropdown
// const dropdownElementList = document.querySelectorAll('.dropdown-toggle');
// [...dropdownElementList].map(dropdownToggleEl => new Dropdown(dropdownToggleEl))

// modal
// const emailInputEl = document.querySelector('#exampleInputEmail1')
// const modalEl = document.querySelector('#exampleModal')

// modalEl.addEventListener('shown.bs.modal', function() {
//   emailInputEl.focus()
// })

// toolTip
// let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
// let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
//   return new bootstrap.Tooltip(tooltipTriggerEl)
// })