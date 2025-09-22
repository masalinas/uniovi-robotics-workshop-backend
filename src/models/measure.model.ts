import {Entity, model, property} from '@loopback/repository';

import {Telemetry} from './telemetry.model';

@model({settings: {strict: false}})
export class Measure extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  device: string;

  @property({
    type: 'string',
    required: true,
  })
  sensor: string;

  @property({
    type: Telemetry,
    required: true,
  })
  value: Telemetry;

  @property({
    type: 'date',
    required: true,
  })
  datetime: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Measure>) {
    super(data);
  }
}

export interface MeasureRelations {
  // describe navigational properties here
}

export type MeasureWithRelations = Measure & MeasureRelations;
