import {Request} from 'express'

export interface TourRequest extends Request
{
    body:{
      Name: string;
      Description?: string;
      Price: number;
      Duration: number;
      Location: string;
      isDeleted: boolean;
    }
}

export interface Tour
{
  TourId: string;
  Name: string;
  Description?: string;
  Price: number;
  Duration: number;
  Location: string;
  isDeleted: boolean;
}