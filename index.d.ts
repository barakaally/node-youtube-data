export declare class YoutubeData {
    constructor()
    getVideoInfo(videoId: string): Promise<{errors?: any ,data: VideoInfo}>;
    getVideoInfo(videoId: string,callback:(errors:any,data:VideoInfo)=>void):void
}

export declare interface VideoInfo {
    csn: string
    root_ve_type: string
    vss_host: string
    cr: string
    host_language: string
    hl: string
    innertube_api_key: string
    innertube_api_version: string
    innertube_context_client_version: string
    watermark: string
    c: string
    cver: string
    player_response: PlayerResponse
    enablecsi: string
    csi_page_type: string
    use_miniplayer_ui: string
    ps: string
    fexp: string
    disable_channel_id_check_for_suspended_channels: string
    enable_nwl_cleaning_logic: string
    html5_long_rebuffer_jiggle_cmt_delay_ms: string
    pageid_as_header_web: string
    autoplay_time: string
    html5_manifestless_media_source_duration: string
    html5_av1_thresh_arm: string
    html5_source_buffer_attach_delay_time: string
    html5_check_segnum_discontinuity: string
    live_chunk_readahead: string
    html5_enable_embedded_player_visibility_signals: string
    enable_live_premiere_web_player_indicator: string
    web_log_connection_in_gel: string
    html5_subsegment_readahead_min_load_speed: string
    html5_player_min_build_cl: string
    web_yt_config_context: string
    html5_disable_move_pssh_to_moov: boolean
    desktop_sparkles_light_cta_button: boolean
    html5_ios7_force_play_on_stall: boolean
    should_clear_video_data_on_player_cued_unstarted: boolean
    kevlar_miniplayer_play_pause_on_scrim: boolean
    web_player_include_innertube_commands: boolean
    web_player_move_autonav_toggle: boolean
    html5_seek_new_elem_delay_ms: string
    html5_set_ended_in_pfx_live: boolean
    enable_preoll_prefetch: boolean
    web_logging_max_batch: number
    skip_ad_button_with_thumbnail: boolean
    deprecate_pair_servlet_enabled: boolean
    html5_min_has_advanced_secs: number
    html5_probe_primary_delay_base_ms: any
    polymer_verifiy_app_state: boolean
    html5_probe_live_using_range: boolean
    html5_media_fullscreen: boolean
    html5_fludd_suspend: boolean
    player_doubletap_to_seek: boolean
    html5_jumbo_mobile_subsegment_readahead_target: number
    csi_on_gel: boolean
    html5_deprecate_video_tag_pool: boolean
    html5_request_sizing_multiplier: number
    html5_skip_slow_ad_delay_ms: number
    music_enable_shared_audio_tier_logic: boolean
    set_interstitial_start_button: boolean
    release_player_on_abandon_for_bulleit_lr_ads_frontend: boolean
    html5_urgent_adaptation_fix: boolean
    html5_hack_gapless_init: boolean
    mweb_enable_skippables_on_jio_phone: boolean
    html5_drm_initial_constraint_from_config: boolean
    use_video_ad_break_offset_ms_int64: boolean
    kevlar_queue_use_update_api: boolean
    enable_client_page_id_header_for_first_party_pings: boolean
    html5_stateful_audio_min_adjustment_value: number
    use_inlined_player_rpc: boolean
    autoplay_time_for_music_content: number
    html5_non_network_rebuffer_duration_ms: boolean
    web_player_api_logging_fraction: number
    html5_random_playback_cap: number
    desktop_player_button_tooltip_with_shortcut: boolean
    delay_ads_gvi_call_on_bulleit_living_room_ms: any
    html5_max_drift_per_track_secs: number
    enable_eviction_protection_for_bulleit: boolean
    html5_experiment_id_label: number
    html5_min_selectable_quality_ordinal: number
    manifestless_post_live_ufph: boolean
    player_bootstrap_method: boolean
    embeds_enable_intersection_observer_v2: boolean
    enable_gel_log_commands: boolean
    html5_default_quality_cap: number
    mdx_load_cast_api_bootstrap_script: boolean
    ytidb_transaction_try_count: number
    player_allow_autonav_after_playlist: boolean
    live_fresca_v2: boolean
    web_enable_ad_signals_in_it_context: boolean
    html5_jumbo_ull_subsegment_readahead_target: number
    enable_client_deferred_full_screen_filtering_for_mweb_phones: boolean
    html5_qoe_intercept: string
    self_podding_highlight_non_default_button: boolean
    html5_seek_over_discontinuities: boolean
    web_screen_associated_all_layers: boolean
    html5_log_timestamp_offset: boolean
    suppress_gen_204: boolean
    leader_election_check_interval: number
    html5_subsegment_readahead_target_buffer_health_secs: number
    html5_manifestless_vp9_otf: boolean
    html5_player_autonav_logging: boolean
    suppress_error_204_logging: boolean
    kevlar_playback_associated_queue: boolean
    html5_encourage_array_coalescing: boolean
    html5_report_slow_ads_as_error: boolean
    web_player_gvi_wexit_other: boolean
    html5_enable_eac3: boolean
    circle_crop_both_discovery_and_masthead_companion_thumbnail: boolean
    kevlar_gel_error_routing: boolean
    short_start_time_prefer_publish_in_watch_log: boolean
    html5_av1_thresh: number
    html5_subsegment_readahead_load_speed_check_interval: number
    offline_error_handling: boolean
    html5_gapless_no_requests_after_lock: boolean
    botguard_async_snapshot_timeout_ms: number
    html5_dynamic_av1_hybrid_threshold: boolean
    html5_deadzone_multiplier: number
    polymer_bad_build_labels: boolean
    disable_new_pause_state3: boolean
    html5_decoder_freeze_timeout_delay_ms: number
    html5_log_rebuffer_events: any
    html5_log_audio_abr: boolean
    html5_unify_sqless_flow: boolean
    variable_buffer_timeout_ms: number
    kevlar_queue_use_dedicated_list_type: boolean
    html5_max_live_dvr_window_plus_margin_secs: number
    web_client_version_override: string
    web_deprecate_service_ajax_map_dependency: boolean
    player_destroy_old_version: boolean
    web_forward_command_on_pbj: boolean
    html5_min_readbehind_cap_secs: number
    html5_allowable_liveness_drift_chunks: number
    web_player_innertube_playlist_update: boolean
    web_player_gvi_wexit_web: boolean
    web_player_touch_mode_improvements: boolean
    html5_autonav_cap_idle_secs: number
    html5_live_abr_head_miss_fraction: number
    kevlar_dropdown_fix: boolean
    autoplay_time_for_music_content_after_autoplayed_video: number
    web_player_response_playback_tracking_parsing: boolean
    html5_vp9_new_mime: boolean
    web_player_ss_dai_ad_fetching_timeout_ms: number
    mweb_native_control_in_faux_fullscreen_shared: boolean
    kevlar_autonav_miniplayer_fix: boolean
    web_player_ss_media_time_offset: boolean
    web_player_nitrate_promo_tooltip: boolean
    html5_new_element_on_invalid_state: boolean
    enable_mixed_direction_formatted_strings: boolean
    html5_log_live_discontinuity: boolean
    html5_seek_timeout_delay_ms: number
    hoffle_cache_size_secs: any
    allow_live_autoplay: boolean
    html5_heartbeat_set_ended: boolean
    player_web_canary_stage: number
    html5_gapless_ad_byterate_multiplier: number
    html5_max_headm_for_streaming_xhr: any
    embeds_enable_embed_module: boolean
    html5_minimum_readahead_seconds: any
    allow_poltergust_autoplay: boolean
    html5_max_selectable_quality_ordinal: number
    html5_post_interrupt_readahead: number
    html5_min_has_advanced_secs_float: number
    web_log_connection: boolean
    web_player_ipp_canary_type_for_logging: number
    html5_decode_to_texture_cap: boolean
    ensure_only_one_resolved_midroll_response_on_web: boolean
    network_polling_interval: number
    player_enable_playback_playlist_change: boolean
    html5_ytlfe_use_py3_spork: boolean
    web_gel_debounce_ms: number
    mweb_enable_custom_control_shared: boolean
    html5_unrewrite_timestamps: boolean
    kevlar_miniplayer: boolean
    html5_safari_desktop_eme_min_version: any
    html5_defer_slicing: boolean
    mweb_cougar_big_controls: boolean
    html5_performance_cap_floor: number
    use_remote_context_in_populate_remote_client_info: boolean
    html5_autonav_quality_cap: number
    manifestless_post_live: boolean
    html5_source_buffer_attach_retry_limit: any
    enable_ypc_clickwrap_on_living_room: boolean
    html5_error_cooldown_in_ms: number
    html5_process_all_encrypted_events: boolean
    self_podding_header_string_template: string
    html5_ads_preroll_lock_timeout_delay_ms: number
    html5_reload_element_long_rebuffer_delay_ms: number
    html5_offline_av1_fallback: boolean
    enable_auto_play_property_fix_for_masthead_ad: boolean
    unplugged_tvhtml5_video_preload_on_focus_delay_ms: any
    web_player_show_music_in_this_video_graphic: string
    html5_gapless_max_played_ranges: number
    html5_gapless_seek_tolerance_secs: number
    html5_start_seconds_priority: boolean
    desktop_action_companion_wta_support: boolean
    web_player_sentinel_is_uniplayer: boolean
    html5_default_ad_gain: number
    html5_av1_thresh_lcc: number
    web_player_innertube_subscription_update: boolean
    www_for_videostats: boolean
    kevlar_command_handler_command_banlist: string
    debug_sherlog_username: string
    html5_ios4_seek_above_zero: boolean
    web_log_app_install_experiments: boolean
    error_message_for_gsuite_network_restrictions: boolean
    nwl_cleaning_rate: number
    kevlar_miniplayer_expand_top: boolean
    html5_perserve_av1_perf_cap: boolean
    disable_child_node_auto_formatted_strings: boolean
    log_js_exceptions_fraction: number
    html5_quality_cap_min_age_secs: number
    leader_election_renewal_interval: number
    html5_subsegment_readahead_timeout_secs: any
    html5_crypto_period_secs_from_emsg: boolean
    web_player_ss_timeout_skip_ads: boolean
    is_mweb_wexit_main_launch: boolean
    set_interstitial_advertisers_question_text: boolean
    html5_restrict_streaming_xhr_on_sqless_requests: boolean
    html5_request_only_hdr_or_sdr_keys: boolean
    html5_subsegment_readahead_seek_latency_fudge: any
    fast_autonav_in_background: boolean
    html5_probe_secondary_during_timeout_miss_count: any
    html5_remove_not_servable_check_killswitch: boolean
    html5_prefer_server_bwe3: boolean
    html5_gapless_ended_transition_buffer_ms: any
    kevlar_allow_multistep_video_init: boolean
    enable_midroll_prefetch_for_html5: boolean
    html5_in_buffer_ptl_timeout_ms: number
    html5_jumbo_ull_nonstreaming_mffa_ms: number
    html5_varispeed_playback_rate: boolean
    web_lifecycles: number
    html5_block_pip_safari_delay: number
    html5_manifestless_max_segment_history: number
    html5_no_placeholder_rollbacks: boolean
    web_api_url: number
    playready_first_play_expiration: number
    mweb_csi_watch_fix: boolean
    web_player_gvi_wexit_mweb: boolean
    web_player_watch_next_response_parsing: boolean
    html5_platform_minimum_readahead_seconds: number
    html5_seek_jiggle_cmt_delay_ms: number
    mweb_muted_autoplay_animation: string
    html5_pacf_enable_dai: boolean
    html5_release_on_error: boolean
    html5_enable_logging_of_bulleit_above_feed_slot_commands: boolean
    tvhtml5_unplugged_preload_cache_size: number
    is_kevlar_wexit_main_launch: boolean
    hoffle_max_video_duration_secs: number
    unplugged_tvhtml5_botguard_attestation: boolean
    html5_gl_fps_threshold: number
    disable_simple_mixed_direction_formatted_strings: boolean
    html5_live_normal_latency_bandwidth_window: number
    html5_df_downgrade_thresh: number
    html5_gapless_preloading: boolean
    html5_perf_cap_override_sticky: boolean
    web_op_continuation_type_banlist: string
    html5_expanded_max_vss_pings: boolean
    player_endscreen_ellipsis_fix: boolean
    kevlar_frontend_video_list_actions: boolean
    enable_topsoil_wta_for_halftime: boolean
    mdx_enable_privacy_disclosure_ui: boolean
    html5_health_to_gel: boolean
    html5_live_low_latency_bandwidth_window: number
    html5_unreported_seek_reseek_delay_ms: number
    html5_rewrite_manifestless_for_sync: boolean
    html5_qoe_user_intent_match_health: boolean
    web_playback_associated_log_ctt: boolean
    html5_in_buffer_ptl: boolean
    disable_thumbnail_preloading: boolean
    web_op_endpoint_banlist: string
    kabuki_pangea_prefer_audio_only_for_atv_and_uploads: boolean
    html5_max_readbehind_secs: number
    disable_legacy_desktop_remote_queue: boolean
    html5_allow_video_keyframe_without_audio: boolean
    html5_desktop_vr180_allow_panning: boolean
    self_podding_midroll_choice_string_template: string
    html5_seek_set_cmt_delay_ms: number
    web_player_music_visualizer_treatment: boolean
    html5_static_abr_resolution_shelf: number
    fix_ads_tracking_for_swf_config_deprecation_mweb: boolean
    html5_stop_video_in_cancel_playback: boolean
    html5_time_based_consolidation_ms: number
    html5_video_tbd_min_kb: number
    preskip_button_style_ads_backend: string
    disable_features_for_supex: boolean
    enable_cast_for_web_unplugged: boolean
    html5_disable_non_contiguous: boolean
    html5_sticky_reduces_discount_by: number
    html5_ios_force_seek_to_zero_on_stop: boolean
    html5_buffer_health_to_defer_slice_processing: number
    html5_live_abr_repredict_fraction: number
    hfr_dropped_framerate_fallback_threshold: number
    self_podding_highlighted_button_blue: boolean
    html5_autoplay_default_quality_cap: any
    embeds_wexit_list_ajax_migration: boolean
    html5_log_experiment_id_from_player_response_to_ctmp: string
    html5_max_readahead_bandwidth_cap: number
    html5_manifestless_seg_drift_limit_secs: number
    web_player_live_monitor_env: boolean
    html5_live_quality_cap: number
    max_resolution_for_white_noise: number
    html5_hfr_quality_cap: number
    addto_ajax_log_warning_fraction: number
    html5_maximum_readahead_seconds: number
    web_client_counter_random_seed: boolean
    nwl_latency_sampling_rate: number
    html5_peak_shave: boolean
    html5_suspend_loader: boolean
    web_player_gvi_wexit_embeds: boolean
    html5_hdcp_probing_stream_url: string
    web_player_watch_next_response: boolean
    html5_sync_seeking_state: boolean
    html5_license_constraint_delay: boolean
    html5_aspect_from_adaptive_format: boolean
    html5_store_xhr_headers_readable: boolean
    html5_use_current_media_time_for_glrem_gllat: boolean
    html5_long_rebuffer_threshold_ms: boolean
    html5_min_readbehind_secs: number
    html5_disable_reset_on_append_error: boolean
    enable_svg_mode_on_embed_mobile: boolean
    ytidb_transaction_ended_event_rate_limit: any
    enable_ve_tracker_key: boolean
    nwl_send_fast_on_unload: boolean
    embeds_enable_age_gating_playability_check: boolean
    gvi_channel_client_screen: boolean
    tvhtml5_min_has_advanced_secs_float: number
    align_ad_to_video_player_lifecycle_for_bulleit: boolean
    flush_gel: boolean
    ad_pod_disable_companion_persist_ads_quality: boolean
    self_podding_pod_choice_string_template: string
    html5_manifestless_vp9: boolean
    html5_readahead_ratelimit: any
    html5_vp9_mime_full_range_flag: boolean
    html5_delay_initial_loading: boolean
    tvhtml5_disable_live_prefetch: boolean
    html5_workaround_delay_trigger: boolean
    dash_manifest_version: number
    html5_ad_timeout_ms: number
    custom_csi_timeline_use_gel: boolean
    html5_new_elem_on_hidden: boolean
    external_fullscreen_with_edu: boolean
    html5_subsegment_readahead_min_buffer_health_secs_on_timeout: number
    embeds_impression_link: boolean
    networkless_logging: boolean
    log_window_onerror_fraction: number
    html5_background_cap_idle_secs: number
    html5_live_ultra_low_latency_bandwidth_window: number
    web_gel_timeout_cap: boolean
    web_player_inline_botguard: boolean
    html5_enable_tvos_encrypted_vp9: boolean
    html5_rewrite_manifestless_for_continuity: boolean
    html5_background_quality_cap: number
    web_player_innertube_share_panel: boolean
    html5_license_server_error_retry_limit: number
    html5_request_size_padding_secs: number
    web_foreground_heartbeat_interval_ms: number
    html5_enable_ac3: boolean
    check_navigator_accuracy_timeout_ms: number
    html5_not_vp9_supported_quality_cap: number
    html5_av1_thresh_hcc: number
    html5_player_dynamic_bottom_gradient: boolean
    web_player_vss_pageid_header: boolean
    html5_reset_index_on_mismatch: boolean
    web_player_gvi_wexit_living_room_pangea: boolean
    html5_subsegment_readahead_min_buffer_health_secs: number
    web_new_autonav_countdown: boolean
    html5_ignore_bad_bitrates: boolean
    web_op_signal_type_banlist: string
    player_ads_set_adformat_on_client: boolean
    leader_election_lease_ttl: number
    networkless_gel: boolean
    cb_v2_uxe: boolean
    web_player_variant_noop: boolean
    status: string
}

interface PlayerResponse {

    responseContext: ResponseContext
    playabilityStatus: PlayabilityStatus
    streamingData: StreamingData,
    playbackTracking: PlaybackTracking
    captions: Caption
    videoDetails: VideoDetail,
    annotations: any[]
    playerConfig: PlayerConfig,
    storyboards: Storyboard,
    microformat: Microformat,
    trackingParams: string,
    attestation: Attestation

}

interface ResponseContext {

    serviceTrackingParams: any[]
    mainAppWebResponseContext: any
    webResponseContextExtensionData: any

}

interface PlayabilityStatus {

    status: string,
    playableInEmbed: boolean
    miniplayer: any

}

interface StreamingData {

    expiresInSeconds: string
    formats: Format[]
    adaptiveFormats: Format[]

}

interface Format {
    itag: string,
    url?: string,
    mimeType: string,
    bitrate: string,
    width: string,
    height: string,
    lastModified: string,
    contentLength: string,
    quality: string,
    fps: string,
    qualityLabel: string,
    projectionType: string,
    averageBitrate: string,
    audioQuality: string,
    approxDurationMs: string,
    audioSampleRate: string,
    audioChannels: string,
    ciphered:boolean,
    signatureCipher?: {
        s: string,
        sp:string,
        url: string
    }
}

interface PlaybackTracking {

    videostatsPlaybackUrl: any
    videostatsDelayplayUrl: any
    videostatsWatchtimeUrl: any
    ptrackingUrl: any
    qoeUrl: any
    atrUrl: any
    youtubeRemarketingUrl: any

}

interface Caption {

    playerCaptionsRenderer: any
    playerCaptionsTracklistRenderer: any

}

interface VideoDetail {

    videoId: string
    title: string
    lengthSeconds: string
    keywords: any[]
    channelId: string
    isOwnerViewing: boolean
    shortDescription: string
    isCrawlable: boolean
    thumbnail: any
    averageRating: number
    allowRatings: boolean
    viewCount: string
    author: string
    isPrivate: boolean
    isUnpluggedCorpus: boolean
    isLiveContent: boolean

}

interface PlayerConfig {
    audioConfig: object
    streamSelectionConfig: object
    daiConfig: object
    mediaCommonConfig: object
    webPlayerConfig: object

}

interface Storyboard {
    playerStoryboardSpecRenderer: object
}

interface Microformat {
    playerMicroformatRenderer: object
}

interface Attestation {

    playerAttestationRenderer: object

}
