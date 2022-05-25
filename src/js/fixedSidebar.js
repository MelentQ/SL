export default function fixedSidebar() {
    if (window.innerWidth <= 640) return;

    const articleLayout = document.querySelector('.article__layout');
    const articleSidebar = document.querySelector('.article__sidebar');
    const articleSidebarInner = document.querySelector('.article__sidebar-inner');

    if (!articleLayout) return;
    if (!articleSidebar) return;
    if (!articleSidebarInner) return;

    coordsCheck(articleSidebarInner, articleSidebar, articleLayout);

    window.addEventListener('scroll', () => {
       coordsCheck(articleSidebarInner, articleSidebar, articleLayout);
    })
}

function coordsCheck(sidebarInner, sidebar, layout) {
    if (layout.getBoundingClientRect().top <= 100) {
        sidebarInner.style.position = 'fixed';
        sidebarInner.style.top = 100 + 'px'
        sidebarInner.style.bottom = 'auto';
        sidebarInner.style.width = sidebar.clientWidth + 'px';
    } else {
        sidebarInner.style.position = 'static';
        sidebarInner.style.width = 'auto';
    }

    if (Math.round(layout.getBoundingClientRect().bottom) <= Math.round(sidebarInner.getBoundingClientRect().bottom)) {
        sidebarInner.style.position = 'absolute';
        sidebarInner.style.bottom = 0 + 'px';
        sidebarInner.style.top = 'auto';
    }
}