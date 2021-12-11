import { createStyles, makeStyles, Theme } from '@material-ui/core'

export const useTableStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    container: {
      maxHeight: 700, //590
    },
    title: {
      flex: '1 1 100%',
    },
    paper: {
      width: '100%',
      marginBottom: theme.spacing(2),
    },
    table: {
      minWidth: 750,
    },
  })
)
