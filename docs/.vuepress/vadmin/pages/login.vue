<template>
    <v-container fluid>
        <v-row>
            <v-col cols="4"></v-col>

            <v-card
                    class="mx-auto"
                    outlined
            >
                <v-list-item three-line>
                    <v-list-item-content>
                        <div class="overline mb-4">Admin</div>
                        <v-list-item-title class="headline mb-1">Login</v-list-item-title>
                        <v-form
                                ref="form"
                                v-model="valid"
                                :lazy-validation="lazy"
                        >
                            <v-text-field
                                    v-model="loginFrom.username"
                                    :counter="10"
                                    :rules="nameRules"
                                    label="Name"
                                    required
                            ></v-text-field>

                            <v-text-field
                                    v-model="loginFrom.password"
                                    :rules="emailRules"
                                    label="E-mail"
                                    required
                            ></v-text-field>
                        </v-form>
                    </v-list-item-content>

                    <v-list-item-avatar
                            tile
                            size="80"
                            color="grey"
                    ></v-list-item-avatar>
                </v-list-item>

                <v-card-actions>
                    <v-btn text @click="loginHandler">Login</v-btn>
                    <v-btn text href="/">To Home</v-btn>
                </v-card-actions>
            </v-card>
            <v-col cols="4"></v-col>
        </v-row>
    </v-container>

</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                loginFrom: {
                    username: null,
                    password: null
                }
            }
        },
        methods: {
            async loginHandler(event) {
                //  用户验证
                if(this.loginFrom.username === this.loginFrom.password){
                    await this.$cookies.set('vadmin_auth_token',1,3600);
                    this.$router.go('/vadmin');
                }
            }
        }
    }
</script>

<style scoped>

</style>
