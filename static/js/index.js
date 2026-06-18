window.HELP_IMPROVE_VIDEOJS = false;

// Prevent browser from restoring scroll position on refresh
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

// More Works Dropdown Functionality (removed - no longer in use)
// Close dropdown when clicking outside (removed - no longer in use)
// Close dropdown on escape key (removed - no longer in use)

// Scroll to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/hide scroll to top button
window.addEventListener('scroll', function() {
    const scrollButton = document.querySelector('.scroll-to-top');
    if (window.pageYOffset > 300) {
        scrollButton.classList.add('visible');
    } else {
        scrollButton.classList.remove('visible');
    }
});

// Scroll to Framework button functionality
function scrollToFramework() {
    const frameworkSection = document.getElementById('framework');
    if (frameworkSection) {
        const targetPosition = frameworkSection.offsetTop;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Scroll to Audio Samples button functionality
function scrollToAudioSamples() {
    const audioSamplesSection = document.getElementById('audio-samples');
    if (audioSamplesSection) {
        const targetPosition = audioSamplesSection.offsetTop;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}


$(document).ready(function() {
    buildAudioTables();
    // Load audio sample texts
    loadAudioSampleTexts();
})

const audioSystems = [
    { folder: 'ground_truth' },
    { folder: 'facetts' },
    { folder: 'face2speech' },
    { folder: 'synthesees' },
    { folder: 'facestylespeech' },
    { folder: 'dsc' }
];

function buildAudioTables() {
    buildAudioTableRows('voxceleb2-body', 1, 6);
    buildAudioTableRows('lrs2-body', 7, 12);
}

function buildAudioTableRows(tbodyId, startId, endId) {
    const tbody = document.getElementById(tbodyId);
    if (!tbody) {
        return;
    }

    const fragment = document.createDocumentFragment();

    for (let id = startId; id <= endId; id += 1) {
        const row = document.createElement('tr');

        row.appendChild(createFaceCell(id));
        row.appendChild(createTextCell(id));

        for (const system of audioSystems) {
            row.appendChild(createAudioCell(system.folder, id));
        }

        fragment.appendChild(row);
    }

    tbody.innerHTML = '';
    tbody.appendChild(fragment);
}

function createFaceCell(sampleId) {
    const cell = document.createElement('td');
    cell.className = 'face-cell';

    const img = document.createElement('img');
    img.src = `static/images/${sampleId}.jpg`;
    img.alt = `Sample ${sampleId}`;
    img.className = 'face-thumbnail';
    img.loading = 'lazy';

    cell.appendChild(img);
    return cell;
}

function createTextCell(sampleId) {
    const cell = document.createElement('td');
    cell.className = 'text-cell';

    const text = document.createElement('p');
    text.id = `text-${sampleId}`;
    text.className = 'sample-text';

    cell.appendChild(text);
    return cell;
}

function createAudioCell(folder, sampleId) {
    const cell = document.createElement('td');
    cell.className = 'audio-cell';

    const player = document.createElement('div');
    player.className = 'audio-player';

    const audio = document.createElement('audio');
    audio.controls = true;
    audio.setAttribute('controlsList', 'nodownload');

    const source = document.createElement('source');
    source.src = `static/audio/${folder}/${sampleId}.wav`;
    source.type = 'audio/wav';

    audio.appendChild(source);
    player.appendChild(audio);
    cell.appendChild(player);

    return cell;
}

// Function to load text content for audio samples from external txt files
async function loadAudioSampleTexts() {
    const sampleIds = Array.from({ length: 12 }, (_, i) => (i + 1).toString());
    
    for (const sampleId of sampleIds) {
        const elementId = `text-${sampleId}`;
        const element = document.getElementById(elementId);
        
        if (element) {
            try {
                const response = await fetch(`static/txt/${sampleId}.txt`);
                if (response.ok) {
                    const text = await response.text();
                    element.textContent = text.trim();
                } else {
                    console.warn(`Failed to load text for ${sampleId}`);
                    element.textContent = 'Text not available';
                }
            } catch (error) {
                console.error(`Error loading text for ${sampleId}:`, error);
                element.textContent = 'Error loading text';
            }
        }
    }
}

