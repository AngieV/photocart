document.addEventListener('click', e => {
    //use css selector or [data-attribute] for target
    const isDropdownLink = e.target.matches('[dropdown-menu-link]')
    if(!isDropdownLink && e.target.closest('[dropdown-menu]') != null) return

    let currentDropdown 
    if(isDropdownLink) {
        currentDropdown = e.target.closest('[dropdown-menu]')
        currentDropdown.classList.toggle("active")
    }
    //closes all the dropdowns except the selected
    document.querySelectorAll("[dropdown-menu].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove("active")
    })

})