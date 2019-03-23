import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { TypographyProps } from '@material-ui/core/Typography';
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = () => {
  return {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    list: {
      width: 200,
    },
  };
};

// propsの為のインターフェースを作成
interface IProps {
  type: TypographyProps['variant'];
  color: TypographyProps['color'];
};

type headerProps = IProps & WithStyles<typeof styles>;

const Header: React.SFC<headerProps> = ({ type, color, classes }) => {
  // Stateの初期化
  const [isOpen, setIsOpen] = React.useState(false);

  // Stateを変化させる処理
  const toggleDrawer = (isDrawer: boolean) => () => {
    setIsOpen(isDrawer);
  };

  // Drawerの中身を作成
  const sideList = (
    <div className={classes.list}>
        <List>
            {
              ['app', 'form'].map((text, index) => (
                <ListItem button key={text} >
                  <Link to={`/${text}`}>
                    <ListItemText primary={text} />
                  </Link>
                </ListItem>
              ))
            }
        </List>
    </div>
  );

  return (
    <div>
      <AppBar position="relative">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon onClick={toggleDrawer(!isOpen)}/>
          </IconButton>
          <Typography variant={type} color={color} >
            Menu
          </Typography>
        </Toolbar>
      </AppBar>

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