const VmoveIn = (delay) => {

    const elements = document.querySelectorAll('.verticalEntrance');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('v-movein')           
                observer.unobserve(entry.target);
            }
        });
        
    });
    elements.forEach((element) => {
        observer.observe(element);
        
    });
};
    document.addEventListener('DOMContentLoaded', () => {
        VmoveIn(600);
        
    });




    const L2RmoveIn = (delay) => {

        const elements = document.querySelectorAll('.L2REntrance');
    
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('L2R-movein')           
                    observer.unobserve(entry.target);
                }
            });
            
        });
        elements.forEach((element) => {
            observer.observe(element);
            
        });
    };
        document.addEventListener('DOMContentLoaded', () => {
            L2RmoveIn(600);
            
        });
// Performs on document load
    document.getElementById('banner').classList.add("scalein");
