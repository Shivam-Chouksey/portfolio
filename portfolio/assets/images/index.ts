import farmdesk from '../Farmdesk.png';
import taxonomy from '../Taxonomy.png';


export const projectImages = {
    Farmdesk: farmdesk,
    Taxonomy: taxonomy,
} as const;

export type ProjectImageKey = keyof typeof projectImages;

export const projectImageKeys = Object.keys(projectImages) as ProjectImageKey[];

export function getProjectImage(key: ProjectImageKey) {
    return projectImages[key];
}