const newProfilePictureUrl = 'https://i.pinimg.com/736x/72/eb/ee/72ebee282e8852e37a469027804c1d25.jpg';

const modifyProfilePictures = () => {
    const profilePictures = document.querySelectorAll('img.feed-shared-actor__avatar-image, img.ivm-view-attr__img--centered, img.presence-entity__image');
    profilePictures.forEach(picture => {
        picture.src = newProfilePictureUrl;
        picture.srcset = newProfilePictureUrl;
    });
};
const observer = new MutationObserver(modifyProfilePictures);
observer.observe(document, { childList: true, subtree: true });

modifyProfilePictures();




