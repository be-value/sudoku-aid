export interface IGameOptionsProps {
  viewCellOptions?: boolean;
  toggleViewCellOptions?(show: boolean): void;
  viewCellNames?: boolean;
  toggleViewCellNames?(show: boolean): void;
}
