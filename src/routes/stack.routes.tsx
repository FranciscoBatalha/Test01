import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { ScreenLogin } from '../screens/TelaInicial';

const Stack = createNativeStackNavigator();

export function StackRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="ScreenLogin"
                component={ScreenLogin}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}
