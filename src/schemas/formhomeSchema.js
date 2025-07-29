import * as Yup from 'yup';

export const filtersSchema = Yup.object({
  location: Yup.string().required('Location is required'),
  startDate: Yup.date().required('Start date is required'),
  endDate:  Yup.date().required("End date is required")
    .test("not-same", "Start and end date can't be the same", function (value) {
      const { startDate } = this.parent;
      return startDate && value && startDate.getTime() !== value.getTime();
    }),
});

