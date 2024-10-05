document.addEventListener('DOMContentLoaded', function() {
const timelineData = [

    {
        date: 'June 2024 - Present',
        title: 'Production Team Member | Toyota Motor Manufacturing Canada | Cambridge, Ontario',
        description:
        `• Assemble vehicle components on a production line using standardized methods.<br>
        • Check parts and assemblies for flaws and ensure satisfy quality requirements.<br>
        • Practiced safety measures, wear personal protective equipment (PPE), and identify potential dangers.<br>
        • Switch stations as needed and adapt to new tasks.`
    },
    
    {
        date: 'September 2021 - April 2022',
        title: 'IT Support | Securus CCTV | Ahmedabad, India',
        description:
        `• Provided remote support, resolving 90% of issues on the first call.<br> 
        • Collaborated with the team to troubleshoot and fix network/system issues.<br>
        • Developed and maintained documentation for system processes and troubleshooting.<br>  
        • Installed and configured hardware, networks, and OS, ensuring client compliance.`
    }
];

    const timeline = document.getElementById('timeline');

    timelineData.forEach((item, index) => {
        let entry = document.createElement('div');
        entry.classList.add('timeline-entry');
        entry.setAttribute('id', 'entry-' + index);

        let dot = document.createElement('div');
        dot.classList.add('timeline-dot');

        let date = document.createElement('div');
        date.textContent = item.date;
        date.classList.add('timeline-date');

        let content = document.createElement('div');
        content.classList.add('timeline-content');
        content.setAttribute('id', 'content-' + index);

        let title = document.createElement('h3');
        title.textContent = item.title;

        let description = document.createElement('p');
        description.innerHTML = item.description;
        description.style.display = 'none'; // Initially hide the description

        // Click event to toggle the description visibility
        entry.addEventListener('click', function() {
            description.style.display = description.style.display === 'none' ? 'block' : 'none';
        });

        content.appendChild(title);
        content.appendChild(description);

        entry.appendChild(dot);
        entry.appendChild(date);
        entry.appendChild(content);

        timeline.appendChild(entry);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Academic Projects Data
    const projectData = [
        {
            date: 'May 2023 - August 2023',
            title: 'Cloud Based, Big Data Messaging Implementation | College Project',
            description: 
            `• Deployed a scalable Kafka cluster on GCP, improving data availability and reducing downtime.<br>
            • Enhanced real-time data processing with optimized Python scripts, boosting efficiency.<br>
            • Automated data retrieval and storage, cutting reporting time by 50%.<br>
            • Utilized GCP to ensure 99.9% data availability and seamless system integration.`
        },


        {
            date: 'September 2022 - December 2022',
            title: 'Subscription Management Solution | Capstone Project',
            description:
            `• Deployed a hybrid cloud with AWS and vSphere, enhancing security and cutting latency by 30%.<br>
            • Secured the development environment with vSphere, improving system stability.<br>
            • Hosted the web server on AWS EC2, boosting performance and accessibility.<br>
            • Utilized Amazon RDS PostgreSQL, reducing setup time by 40% and ensuring secure data handling.`
        }
        // Add more projects here
    ];

    const projectsList = document.getElementById('projectsList');

    // Loop through each project and create entries
    projectData.forEach((project, index) => {
        let entry = document.createElement('div');
        entry.classList.add('projectsList-entry');
        entry.setAttribute('id', 'entry-' + index);

        let dot = document.createElement('div');
        dot.classList.add('projectsList-dot');

        let date = document.createElement('div');
        date.textContent = project.date;
        date.classList.add('projectsList-date');

        let content = document.createElement('div');
        content.classList.add('projectsList-content');
        content.setAttribute('id', 'content-' + index);

        let title = document.createElement('h3');
        title.textContent = project.title;

        let description = document.createElement('p');
        description.innerHTML = project.description; // Use innerHTML for bullet points and line breaks
        description.style.display = 'none'; // Initially hide the description

        // Click event to toggle the description visibility
        entry.addEventListener('click', function() {
            description.style.display = description.style.display === 'none' ? 'block' : 'none';
        });

        // Append elements to the projectsList
        content.appendChild(title);
        content.appendChild(description);
        entry.appendChild(dot);
        entry.appendChild(date);
        entry.appendChild(content);
        projectsList.appendChild(entry);
    });
});