var exampleModal = document.getElementById('mainModal')
exampleModal.addEventListener('show.bs.modal', function (event) {
    // Button that triggered the modal
    var button = event.relatedTarget
    // Extract info from data-bs-* attributes
    var title = button.getAttribute('data-bs-title')
    // If necessary, you could initiate an AJAX request here
    // and then do the updating in a callback.
    //
    // Update the modal's content.
    var modalTitle = exampleModal.querySelector('.modal-title')
    var modalBody = exampleModal.querySelector('.modal-body')
    
    console.log(modalTitle)
    console.log(modalBody)

    modalTitle.textContent = button.text
    modalBody.textContent = getModalBody(title)
})

function getModalBody(title) {
    switch (title) {
        case 'about':
            return `About et doloribus nesciunt qui soluta dolor id temporibus sint natus. Quo saepe nam ab similique. Ea id est dolor alias aut temporibus facilis quia. Non sit sequi sint sed et omnis et eaque. Amet qui aspernatur accusantium similique ut.
            Autem odit quia voluptate asperiores quo molestias ducimus. Culpa ducimus sed temporibus vero aut officia quam voluptatem et. Autem fuga quo.
            Voluptatem praesentium sed quam enim vel. Et est consectetur repellendus consequatur debitis deserunt corporis placeat et. Vero ab eaque esse quis.`
        case 'companies':
            return `Companies et doloribus nesciunt qui soluta dolor id temporibus sint natus. Quo saepe nam ab similique. Ea id est dolor alias aut temporibus facilis quia. Non sit sequi sint sed et omnis et eaque. Amet qui aspernatur accusantium similique ut.
            Autem odit quia voluptate asperiores quo molestias ducimus. Culpa ducimus sed temporibus vero aut officia quam voluptatem et. Autem fuga quo.
            Voluptatem praesentium sed quam enim vel. Et est consectetur repellendus consequatur debitis deserunt corporis placeat et. Vero ab eaque esse quis.`
        case 'investors':
            return `Investors et doeloribus nesciunt qui soluta dolor id temporibus sint natus. Quo saepe nam ab similique. Ea id est dolor alias aut temporibus facilis quia. Non sit sequi sint sed et omnis et eaque. Amet qui aspernatur accusantium similique ut.
            Autem odit quia voluptate asperiores quo molestias ducimus. Culpa ducimus sed temporibus vero aut officia quam voluptatem et. Autem fuga quo.
            Voluptatem praesentium sed quam enim vel. Et est consectetur repellendus consequatur debitis deserunt corporis placeat et. Vero ab eaque esse quis.`
        default:
            return ''
    }
}