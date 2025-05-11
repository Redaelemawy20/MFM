import SectionProps from './SectionProps';
import FormProps from './FormProps';
import HasId from '../common/HasId';

export default interface GallaryItem {
  name?: string;
  componentId: string;
  component: React.ComponentType<any>;
  componentEdit?: React.LazyExoticComponent<
    React.ComponentType<{ data: any } & FormProps>
  >;
  defaultData: any;
}
