import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {IotDataSource} from '../datasources';
import {Measure, MeasureRelations} from '../models';

export class MeasureRepository extends DefaultCrudRepository<
  Measure,
  typeof Measure.prototype.id,
  MeasureRelations
> {
  constructor(
    @inject('datasources.iot') dataSource: IotDataSource,
  ) {
    super(Measure, dataSource);
  }
}
