import React , {useState}  from 'react'
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { FontAwesome,MaterialCommunityIcons, Ionicons, MaterialIcons,FontAwesome5} from '@expo/vector-icons'; 
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer'
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    Switch
} from 'react-native-paper'

export default function DrawerContent(props) {
    const [isDarkTheme, setDarkTheme] = useState(false)

    const toggleTheme = () => {
        setDarkTheme(!isDarkTheme)
    }
    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props} >
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row', marginTop:15}}>
                            <Avatar.Icon 
                             icon = { () => (
                                <Ionicons name="ios-person" size={55}  />
                             )}
                            color="black"
                            />
                            <View style={{marginLeft:15,flexDirection:'column'}}>
                                <Title style={styles.title}>Ananya Bisht</Title>
                                <Caption style={styles.caption}>@ananyabisht07</Caption>
                            </View>
                        </View>

                        <View style={styles.row}>
                                <View style={styles.section}>
                                    <Paragraph style={styles.paragraph,styles.caption}>80</Paragraph>
                                    <Caption style={styles.caption}>Following</Caption>
                                </View>
                                <View style={styles.section}>
                                    <Paragraph style={styles.paragraph,styles.caption}>100</Paragraph>
                                    <Caption style={styles.caption}>Followers</Caption>
                                </View>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection} >
                        <DrawerItem 
                            icon={ () => (
                                <MaterialCommunityIcons name="home-outline" size={38} />
                            )}
                            label="Home"
                            onPress={ () => {}}
                        />
                        <DrawerItem 
                            icon={ () => (
                                <MaterialIcons name="person-outline" size={38} color="black" />
                            )}
                            label="Profile"
                            onPress={ () => {}}
                        />
                        <DrawerItem 
                            icon={ () => (
                                <FontAwesome5 name="bookmark" size={32} />
                            )}
                            label="Bookmarks"
                            onPress={ () => {}}
                        />
                        <DrawerItem 
                            icon={ () => (
                                <MaterialIcons name="settings" size={34} />
                            )}
                            label="Setting"
                            onPress={ () => {}}
                        />
                        <DrawerItem 
                            icon={ () => (
                                <FontAwesome name="support" size={34} />
                            )}
                            label="Support"
                            onPress={ () => {}}
                        />         
                    </Drawer.Section>
                    <Drawer.Section>
                        <TouchableWithoutFeedback onPress={() => {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={isDarkTheme} />
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={ () => (
                        <Ionicons name="ios-exit" size={30} />
                    )}
                    label="Sign Out"
                    onPress={ () => {}}
                />
            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      marginLeft: 3
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });
