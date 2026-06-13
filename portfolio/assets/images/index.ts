import farmdesk from './Farmdesk.png';
import taxonomy from './Taxonomy.png';
import dineflow from './DineFlow.png';
import ERP from './ERP.png';


export const projectImages = {
    Farmdesk: farmdesk,
    Taxonomy: taxonomy,
    DineFlow: dineflow,
    ERP: ERP
} as const;

export type ProjectImageKey = keyof typeof projectImages;

export const projectImageKeys = Object.keys(projectImages) as ProjectImageKey[];

export function getProjectImage(key: ProjectImageKey) {
    return projectImages[key];
}