import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';

const styles = () => {
  return {
    list: {
        width: 250,
    },
  };
};

// propsの為のインターフェースを作成
interface IProps {
    propsOpened: false,
};

type headerProps = IProps & WithStyles<typeof styles>;

const Header: React.SFC<headerProps> = ({ propsOpened, classes }) => {  
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = (isDrawer: boolean) => () => {
    setIsOpen(isDrawer);
  };

  const sideList = (
    <div className={classes.list}>
        <List>
            {['app', 'form'].map((text) => (
                <ListItem button key={text}>
                    <ListItemText primary={text} />
                </ListItem>
            ))}
        </List>
    </div>
  );

  return (
    <div>
      <Drawer open={isOpen} onClose={toggleDrawer(false)}>
        <div
          tabIndex={0}
          role="button"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          {sideList}
        </div>
      </Drawer>
    </div>
  );
};

export default withStyles(styles)(Header);
