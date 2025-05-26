import { PropertyLocation, PropertyStatus, PropertyCollection } from '../../enums/property.enum';

export interface PropertyUpdate {
	_id: string;
	propertyCollection?: PropertyCollection;
	propertyStatus?: PropertyStatus;
	propertyLocation?: PropertyLocation;
	propertyAddress?: string;
	propertyTitle?: string;
	propertyPrice?: number;
	propertyRarityScore?: number;
	propertyEditions?: number;
	propertyTraitGroups?: number;
	propertyImages?: string[];
	propertyDesc?: string;
	propertyBarter?: boolean;
	propertyRent?: boolean;
	soldAt?: Date;
	deletedAt?: Date;
	constructedAt?: Date;
}
