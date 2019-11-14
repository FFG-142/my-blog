<template>
	<div>
		<div class="xu-nav">
			<div class="xu-nav-bar xu-fx-between">
				<ul class="xu-list">
					<li>
						<router-link to="/index">主页</router-link>
					</li>
					<li>
						<router-link to="/collection">专题</router-link>
					</li>
					<li>
						<router-link to="/article">文章</router-link>
					</li>
					<li>
						<router-link to="/user">作者</router-link>
					</li>
				</div>
				<div class="bl-df-right">
					<ul v-if="!this.user">
						<li><router-link to="/download">下载APP</router-link></li>
						<li><router-link to="/sign">登录</router-link></li>
					</ul>
					<ul>
						<li v-if="this.user" class="bl-df-right">
							<router-link to="/user"><img :src="user.avatar" class="bl-avatar-normal" /></router-link>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<router-view class="xu-container" />
	</div>
</template>

<script>
export default {
	data() {
		return {
			user: JSON.parse(localStorage.getItem('user'))
		};
	},
	created() {},
	methods: {}
};
</script>

<style>
</style>
