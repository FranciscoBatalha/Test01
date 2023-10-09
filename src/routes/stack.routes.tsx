import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { ScreenLogin } from '../screens/TelaInicial';
import { LoginAluno } from '../screens/LoginAluno'; // Certifique-se de usar o nome de arquivo correto e caminho
import { LoginResponsavel } from '../screens/LoginResponsavel';
import { LoginAdministrador } from '../screens/LoginAdministrador';
import { HomeAluno } from '../screens/HomeAluno';
import { RelatorioAluno } from '../screens/RelatorioAluno';
import { Notifica } from '../screens/Notifica';
import { DadosAluno } from '../screens/DadosAluno';


const Stack = createNativeStackNavigator();

export function StackRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="ScreenLogin"
                component={ScreenLogin}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="LoginAluno"
                component={LoginAluno}
                options={{ headerShown: false }}
            />
             <Stack.Screen
                name="LoginResponsavel"
                component={LoginResponsavel}
                options={{ headerShown: false }}
            />
             <Stack.Screen
                name="LoginAdministrador"
                component={LoginResponsavel}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="HomeAluno"
                component={HomeAluno}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="RelatorioAluno"
                component={RelatorioAluno}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Notifica"
                component={Notifica}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="DadosAluno"
                component={DadosAluno}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}
