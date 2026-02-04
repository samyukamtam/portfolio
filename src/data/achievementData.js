import icraImage from '../assets/png/icra.jpeg'
import acmImage from '../assets/png/acm.jpeg'
import compsacImage from '../assets/png/compsac.jpeg'

export const achievementData = {
    bio : "",
    achievements : [
        {
            id : 1,
            title : 'Towards Robust Bronchoscopic SLAM: Transformer-Based Monocular Depth for Gaussian Splatting',
            details : 'IEEE ICRA 2025 Workshop',
            date : 'January 2025',
            field : 'Computer Vision',
            image : icraImage
            //developer-portfolio/src/assets/pdf/6_Towards_Robust_Bronchoscopic.pdf
        },
        {
            id : 2,
            title : 'Quick Convergence of ADR Mechanism in Dense and Dynamic LoRa-based IoT Networks',
            details : 'ACM MobiHoc 2024',
            date : 'January 2023',
            field : 'Computer Networks',
            image : acmImage
        },
        {
            id : 3,
            title : 'Secure and Efficient Data Deduplication Framework for IoT and Fog Computing',
            details : 'IEEE COMPSAC 2023 (AINet)',
            date : 'May 2023',
            field : 'Computer Networks',
            image : compsacImage
        }

    ]
}


// Do not remove any fields.
// Leave it blank instead as shown below.

/*

export const achievementData = {
    bio : "",
    achievements : []
}

*/
