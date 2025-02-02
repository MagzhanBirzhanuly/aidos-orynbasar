document.getElementById('open-gallery').addEventListener('click', function() {
    document.getElementById('gallery').style.display = 'block';
    loadGalleryImages();
});

function loadGalleryImages() {
    const galleryContainer = document.querySelector('.gallery-images');

    // Перечень фотографий, которые нужно исключить
    const removedImages = [
        "PRO_7477", "PRO_7478", "PRO_7480", "PRO_7481", "PRO_7488", "PRO_7491", 
        "PRO_7503", "PRO_7508", "PRO_7549", "PRO_7550", "PRO_7551", "PRO_7552", 
        "PRO_7553", "PRO_7554", "PRO_7555", "PRO_7556", "PRO_7566", "PRO_7567", 
        "PRO_7560", "PRO_7575", "PRO_7595", "PRO_7604", "PRO_7606", "PRO_7617", 
        "PRO_7618", "PRO_7619", "PRO_7625", "PRO_7627", "PRO_7645", "PRO_7646", 
        "PRO_7647", "PRO_7652", "PRO_7653", "PRO_7655", "PRO_7660", "PRO_7667", 
        "PRO_7958", "PRO_7959", "PRO_7972", "PRO_7973", "PRO_7974", "PRO_7991", 
        "PRO_7995", "PRO_7996", "PRO_8020", "PRO_8021", "PRO_8022", "PRO_8024", 
        "PRO_8025", "PRO_8043", "PRO_8057", "PRO_8127", "PRO_8135", "PRO_8184", 
        "PRO_8185", "PRO_8190", "PRO_8192", "PRO_8193", "PRO_8194", "PRO_8196", 
        "PRO_8197", "PRO_8198", "PRO_8199", "PRO_8200", "PRO_8237", "PRO_8238", 
        "PRO_8258", "PRO_8259", "PRO_8260", "PRO_8262", "PRO_8263", "PRO_8264", 
        "PRO_8265"
    ];

    // Цикл по фотографиям, чтобы исключить удаленные
    for (let i = 7286; i <= 8265; i++) {
        const imageName = `PRO_${i}`;
        
        // Пропускаем те, что в списке удаленных
        if (removedImages.includes(imageName)) {
            continue;
        }
        
        const img = document.createElement('img');
        img.src = `images/${imageName}.jpg`;  // Путь к изображениям
        img.alt = imageName;
        img.addEventListener('click', function() {
            openLightbox(img.src);
        });
        galleryContainer.appendChild(img);
    }
}

function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    
    lightbox.style.display = 'flex';
    lightboxImg.src = imageSrc;

    const downloadBtn = document.getElementById('download-btn');
    downloadBtn.onclick = function() {
        downloadImage(imageSrc);
    };

    const shareBtn = document.getElementById('share-btn');
    shareBtn.onclick = function() {
        shareImage(imageSrc);
    };

    const closeBtn = document.getElementById('close-lightbox');
    closeBtn.onclick = function() {
        closeLightbox();
    };
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

function downloadImage(imageSrc) {
    const a = document.createElement('a');
    a.href = imageSrc;
    a.download = imageSrc.split('/').pop(); // Имя файла будет таким же, как у изображения
    a.click();  // Симулируем клик, чтобы файл начал скачиваться
}

function shareImage(imageSrc) {
    const shareText = `Посмотрите это фото: ${imageSrc}`;
    if (navigator.share) {
        navigator.share({
            title: 'Айдос & Орынбасар Той фотолары',
            text: shareText,
            url: imageSrc,
        }).catch(console.error);
    } else {
        alert('К сожалению, функция поделиться недоступна в вашем браузере.');
    }
}
