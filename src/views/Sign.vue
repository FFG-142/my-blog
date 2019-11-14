<template>
	<div class="sign-container bl-df-center">
		<div class="sign-box bl-shadow bl-dfc-around">
			<h2 class="bl-title">登录</h2>
			<input type="text" placeholder="请输入手机号" class="bl-input-box" v-model="userDto.mobile" />
			<input type="password" placeholder="请输入密码" class="bl-input-box" v-model="userDto.password" />
			<div class="bl-df-center">
				<button class="bl-btn bl-btn-round bl-btn-normal bl-cyan-theme">取消</button>
				<button class="bl-btn bl-btn-round bl-btn-normal bl-orange-theme" @click="signIn" autofocus="autofocus">确定</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			userDto: {
				mobile: '',
				password: ''
			}
		};
	},
	created() {},
	methods: {
		signIn() {
			this.axios.post('http://localhost:8080/api/sign-in', JSON.stringify(this.userDto)).then(response => {
				this.$dialog.alert(response.data.msg).then(function(dialog) {
					console.log('关闭');
				});
				if (response.data.msg === '登录成功') {
					//将后台的用户信息存入本地存储
					localStorage.user = JSON.stringify(response.data.data);
					//路由跳转到首页
					this.$router.push('/');
				}
			});
		}
	}
};
</script>

<style scoped>
.sign-container {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-image: url(../assets/img/bg.jpg);
	background-size: cover;
}
.sign-box {
	width: 35%;
	height: 45%;
	border: 1px solid #eee;
	border-radius: 10px;
	background-color: rgb(74, 194, 185, 0.5);
	padding-top: 10px;
	padding-bottom: 10px;
}
h2 {
	letter-spacing: 10px;
	opacity: 0.8;
}
</style>
