import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MailIcon from '@mui/icons-material/Mail'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
// Nav
import { Routes, Route, Link } from 'react-router-dom'
import Form from 'components/Form/Form'
import CustomForm from 'components/Form/CustomForm'
import InputForm from 'components/Form/InputForm'
import SandBox from 'components/SandBox'
import SandBox2 from 'components/SandBox2'
import { Stack } from '@mui/material'

export const drawerWidth = 60

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <Box>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                {/* <ListItemText primary={text} /> */}
                <Typography
                  sx={{
                    fontSize: 12,
                    whitespace: 'wrap',
                    lineHeight: 1,
                    color: 'text.secondary',
                  }}
                >
                  {text}
                </Typography>
              </Box>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <Box>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                {/* <ListItemText primary={text} /> */}
                <Typography
                  sx={{
                    fontSize: 12,
                    whitespace: 'wrap',
                    lineHeight: 1,
                    color: 'text.secondary',
                  }}
                >
                  {text}
                </Typography>
              </Box>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <Box>
      <Routes>
        {
          <>
            <Route path="form" element={<Form />} />
            <Route path="custom-form" element={<CustomForm />} />
            <Route path="input-form" element={<InputForm />} />
            <Route path="sand-box" element={<SandBox />} />
            <Route path="sand-box2" element={<SandBox2 />} />
          </>
        }
      </Routes>

      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>

          <nav>
            <Stack
              spacing={1}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'baseline',
                gap: 1,
                padding: 1,
              }}
            >
              <Link to="form">Typo</Link> /
              <Link to="custom-form">custom-form</Link> /
              <Link to="input-form">input-form</Link> /
              <Link to="sand-box">sand-box</Link> /
              <Link to="sand-box2">sand-box2</Link>
            </Stack>
          </nav>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {drawerWidth > 0 && <Divider />}
      </Box>
    </Box>
  )
}
