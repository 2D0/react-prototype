//반응형 전용 Device size 데이터
const size = {
  MaxWidthFull: '450px',
  MaxHeightM: '500px',
};
const Device = {
  MaxWidthFull: `(max-width: ${size.MaxWidthFull})`,
  MaxHeightM: `(max-height: ${size.MaxHeightM})`,
};
export default Device;
